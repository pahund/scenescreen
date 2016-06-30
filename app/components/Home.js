import React, { Component } from "react";
import styles from "./Home.css";
import controllerMessage, {
    CMB_ROTARY_1,
    CMB_BUTTON_2,
    CMB_ENABLED,
    CMB_MOD_WHEEL,
    BUTTON_ON,
    BUTTON_OFF,
    ENABLED_BYPASS,
    ENABLED_OFF,
    ENABLED_ON
} from "../midi/controllerMessage";

export default class Home extends Component {
    constructor(props) {
        super(props);
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess({
                sysex: false // this defaults to 'false' and we won't be covering sysex in this article.
            }).then(this.onMIDISuccess.bind(this), this.onMIDIFailure);
        } else {
            console.error("No MIDI support in your browser.");
        }
    }

    onMIDISuccess(midi) {
        console.info("Yay! MIDI success");
        this.midi = midi;
        for (const input of midi.inputs.values()) {
            input.onmidimessage = this.onMIDIMessage.bind(this);
        }
        console.group("MIDI outputs");
        for (const output of midi.outputs.values()) {
            console.dir(output);
            setInterval(() => {
                const cmbRotary1Max = controllerMessage(1, CMB_ROTARY_1, 127);
                const cmbRotary1Min = controllerMessage(1, CMB_ROTARY_1, 0);
                const cmbButton2On = controllerMessage(2, CMB_BUTTON_2, BUTTON_ON);
                const cmbButton2Off = controllerMessage(2, CMB_BUTTON_2, BUTTON_OFF);
                const cmbEnabledOn = controllerMessage(3, CMB_ENABLED, ENABLED_ON);
                const cmbEnabledOff = controllerMessage(3, CMB_ENABLED, ENABLED_OFF);
                const cmbEnabledBypass = controllerMessage(3, CMB_ENABLED, ENABLED_BYPASS);
                const cmbModWheelMin = controllerMessage(4, CMB_MOD_WHEEL, 0);
                const cmbModWheelMid = controllerMessage(4, CMB_MOD_WHEEL, 63);
                const cmbModWheelMax = controllerMessage(4, CMB_MOD_WHEEL, 127);
                output.send(cmbRotary1Max);
                output.send(cmbModWheelMin, window.performance.now() + 125.0);
                output.send(cmbEnabledBypass, window.performance.now() + 250.0);
                output.send(cmbModWheelMid, window.performance.now() + 375.0);
                output.send(cmbButton2On, window.performance.now() + 500.0);
                output.send(cmbModWheelMax, window.performance.now() + 625.0);
                output.send(cmbEnabledOn, window.performance.now() + 750.0);
                output.send(cmbModWheelMid, window.performance.now() + 875.0);
                output.send(cmbRotary1Min, window.performance.now() + 1000.0);
                output.send(cmbModWheelMin, window.performance.now() + 1125.0);
                output.send(cmbEnabledOff, window.performance.now() + 1250.0);
                output.send(cmbButton2Off, window.performance.now() + 1500.0);
            }, 3000);
        }
        console.groupEnd();
    }

    onMIDIMessage(message) {
        console.info("MIDI message");
        console.dir(message);
    }

    onMIDIFailure() {
        console.info("ARGH! MIDI failure");
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <h2>SceneScreen</h2>
                </div>
            </div>
        );
    }
}
