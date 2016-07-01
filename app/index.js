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
import "./app.global.css";
import openFile from "./actions/openFile";

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({ sysex: false })
        .then(({ outputs }) => {
            if (outputs.size === 0) {
                throw new Error("No MIDI output ports available.");
            }
            showApp(outputs.values().next().value);
        })
        .catch(showError);
} else {
    showError(new Error("No MIDI support in your browser."));
}

function showError({ message }) {
    render(
        <ErrorMessage message={message} />,
        document.getElementById("root")
    );
}

function showApp(midiOutput) {
    const store = configureStore({
        midiOutput,
        scenes: [],
        layout: {
            columns: calculateLayoutColumns()
        }
    });
    const history = syncHistoryWithStore(hashHistory, store);
    window.onresize = () => store.dispatch(resize());
    ipcRenderer.on("file-open", (event, data) => store.dispatch(openFile(data)));
    render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>,
        document.getElementById("root")
    );
}


