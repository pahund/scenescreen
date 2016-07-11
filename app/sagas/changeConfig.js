/**
 * changeConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jul 2016
 */
import { ipcRenderer } from "electron";
import {
    CHANGE_BARS,
    CHANGE_BEATS_PER_BAR,
    CHANGE_TEMPO,
    CHANGE_MIDI_OUTPUT,
    REFRESH_MIDI_OUTPUT_LIST
} from "../actions";
import stop from "../actions/stop";
import initMidiOutputs from "../midi/initMidiOutputs";
import updateMidiConfig from "../actions/updateMidiConfig";
import {
    CONFIG,
    DB_NAME
} from "../config/initConfig";
import { takeEvery } from "redux-saga";
import { put, call } from "redux-saga/effects";
import PouchDB from "pouchdb/lib/index-browser";

function *changeConfig(db, getState, action) {
    const config = yield call([db, db.get], CONFIG);
    const { transport: { metronome }, midi } = getState();
    let outputs;
    switch (action.type) {
        case CHANGE_BARS:
            config.bars = action.bars;
            metronome.bars = action.bars;
            break;
        case CHANGE_BEATS_PER_BAR:
            config.beatsPerBar = action.beatsPerBar;
            metronome.beatsPerBar = action.beatsPerBar;
            break;
        case CHANGE_TEMPO:
            config.tempo = action.tempo;
            metronome.setTempo(action.tempo);
            break;
        case CHANGE_MIDI_OUTPUT:
            yield put(stop()); // we need to stop the loop when we switch the MIDI bus
            yield put(updateMidiConfig({
                ...midi,
                selectedOutput: action.midiOutputId
            }));
            config.midiOutputId = action.midiOutputId;
            break;
        case REFRESH_MIDI_OUTPUT_LIST:
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
            return;
        default:
    }
    yield call([db, db.put], config);
}

export default function *(getState) {
    const db = new PouchDB(DB_NAME);
    yield takeEvery([
        CHANGE_BARS,
        CHANGE_BEATS_PER_BAR,
        CHANGE_TEMPO,
        CHANGE_MIDI_OUTPUT,
        REFRESH_MIDI_OUTPUT_LIST
    ], changeConfig, db, getState);
}

