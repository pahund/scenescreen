/**
 * validateMidiOutput.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import { ipcRenderer } from "electron";
import changeMidiOutput from "../actions/changeMidiOutput";

export default store => {
    const { midi: { outputs, selectedOutput } } = store.getState();

    const output = outputs.get(selectedOutput);

    if (output) {
        return; // oll korrect
    }
    const newOutput = outputs.values().next().value;

    if (selectedOutput) {
        ipcRenderer.send(
            "error",
            {
                message: "Previously selected MIDI output bus is not available, " +
                         `using ${newOutput.name} as fallback`
            }
        );
    }
    store.dispatch(changeMidiOutput(newOutput.id));
};
