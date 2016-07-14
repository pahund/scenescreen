/**
 * changeMidiSettings.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 14 Jul 2016
 */
import {
    CHANGE_MIDI_OUTPUT
} from "../actions";
import stop from "../actions/stop";
import updateMidiConfig from "../actions/updateMidiConfig";
import { takeEvery } from "redux-saga";
import { put } from "redux-saga/effects";

function *changeMidiSettings(getState, action) {
    const { midi } = getState();
    switch (action.type) {
        case CHANGE_MIDI_OUTPUT:
            yield put(stop()); // we need to stop the loop when we switch the MIDI bus
            yield put(updateMidiConfig({
                ...midi,
                selectedOutput: action.midiOutputId
            }));
            break;
        default:
    }
}

export default function *(getState) {
    yield takeEvery(CHANGE_MIDI_OUTPUT, changeMidiSettings, getState);
}
