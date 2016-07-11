/**
 * changeConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jul 2016
 */
import { ipcRenderer } from "electron";
import { REFRESH_MIDI_OUTPUT_LIST } from "../actions";
import initMidiOutputs from "../midi/initMidiOutputs";
import updateMidiConfig from "../actions/updateMidiConfig";
import { takeEvery } from "redux-saga";
import { put, call } from "redux-saga/effects";

function *refreshMidiOutputList(getState) {
    const { midi } = getState();
    let outputs;
    try {
        outputs = yield call(initMidiOutputs);
    } catch (error) {
        ipcRenderer.send("error", { message: error.message });
        yield put(updateMidiConfig({
            ...midi,
            error: true
        }));
        return;
    }
    const selectedOutput = !outputs.get(midi.selectedOutput) ?
        outputs.values().next().value.id :
        midi.selectedOutput;
    yield put(updateMidiConfig({
        selectedOutput,
        outputs
    }));
}

export default function *(getState) {
    yield takeEvery(REFRESH_MIDI_OUTPUT_LIST, refreshMidiOutputList, getState);
}

