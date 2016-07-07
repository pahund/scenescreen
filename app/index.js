import "babel-polyfill";
import { ipcRenderer } from "electron";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import routes from "./routes";
import configureStore from "./store/configureStore";
import ErrorMessage from "./components/ErrorMessage";
import calculateLayoutColumns from "./utils/calculateLayoutColumns";
import resize from "./actions/resize";
import navigate from "./actions/navigate";
import sendMidi from "./actions/sendMidi";
import "./app.global.css";
import openFile from "./actions/openFile";
import clockMessage from "./midi/clockMessage";
import { STOPPED } from "./actions/changeTransportState";
import Metronome from "./midi/metronome";
import initMidiOutputs from "./midi/initMidiOutputs";
import initConfig from "./config/initConfig";
import updateBeatBar from "./actions/updateBeatBar";

Promise.all([
    initConfig(),
    initMidiOutputs()
]).then(showApp).catch(showError);

function showError(error) {
    const message = error.message || error.toString();
    render(
        <ErrorMessage message={message} />,
        document.getElementById("root")
    );
}

function showApp([config, outputs]) {
    const selectedOutput = outputs.values().next().value.id;
    const metronome = new Metronome(config);

    const store = configureStore({
        config,
        midi: {
            outputs,
            selectedOutput
        },
        transport: {
            metronome,
            beat: 1,
            bar: 1,
            state: STOPPED
        },
        scenes: [],
        layout: {
            columns: calculateLayoutColumns()
        }
    });

    metronome.on("position", () => store.dispatch(sendMidi([clockMessage.tick], false)));
    metronome.on("beat", (bar, beat) => store.dispatch(updateBeatBar(bar, beat)));

    const history = syncHistoryWithStore(hashHistory, store);
    window.onresize = () => store.dispatch(resize());
    ipcRenderer.on("file-open", (event, data) => store.dispatch(openFile(data)));
    ipcRenderer.on("go-to-preferences", () => store.dispatch(navigate("/preferences")));
    render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>,
        document.getElementById("root")
    );
    ipcRenderer.send("ready-to-rock");
}
