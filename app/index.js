import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import routes from "./routes";
import configureStore from "./store/configureStore";
import ErrorMessage from "./components/ErrorMessage";
import "./app.global.css";
import controllerMessage, {
    CMB_ROTARY_1,
    CMB_BUTTON_2,
    CMB_ENABLED,
    CMB_MOD_WHEEL,
    BUTTON_ON,
    BUTTON_OFF,
    ENABLED_OFF,
    ENABLED_ON
} from "./midi/controllerMessage";

const cmbRotary1Max = controllerMessage(1, CMB_ROTARY_1, 127);
const cmbRotary1Min = controllerMessage(1, CMB_ROTARY_1, 0);
const cmbButton2On = controllerMessage(2, CMB_BUTTON_2, BUTTON_ON);
const cmbButton2Off = controllerMessage(2, CMB_BUTTON_2, BUTTON_OFF);
const cmbEnabledOn = controllerMessage(3, CMB_ENABLED, ENABLED_ON);
const cmbEnabledOff = controllerMessage(3, CMB_ENABLED, ENABLED_OFF);
const cmbModWheelMin = controllerMessage(4, CMB_MOD_WHEEL, 0);
const cmbModWheelMax = controllerMessage(4, CMB_MOD_WHEEL, 127);

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
        scenes: [
            {
                name: "Laut",
                color: "lime",
                messages: [
                    cmbRotary1Max,
                    cmbButton2On,
                    cmbEnabledOn,
                    cmbModWheelMax
                ]
            },
            {
                name: "Leise",
                color: "hotpink",
                messages: [
                    cmbRotary1Min,
                    cmbButton2Off,
                    cmbEnabledOff,
                    cmbModWheelMin
                ]
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            },
            {
                name: "(disabled)",
                color: "silver",
                messages: []
            }
        ]
    });
    const history = syncHistoryWithStore(hashHistory, store);
    render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>,
        document.getElementById("root")
    );
}

