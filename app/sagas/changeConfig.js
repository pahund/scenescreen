/**
 * changeConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jul 2016
 */
import {
    CHANGE_BARS,
    CHANGE_BEATS_PER_BAR,
    CHANGE_TEMPO,
    CHANGE_MIDI_OUTPUT
} from "../actions";
import stop from "../actions/stop";
import updateMidiConfig from "../actions/updateMidiConfig";
import { CONFIG, DB_NAME } from "../config/initConfig";
import { takeEvery } from "redux-saga";
import { put, call } from "redux-saga/effects";
import PouchDB from "pouchdb/lib/index-browser";

function *changeConfig(db, getState, action) {
    const config = yield call([db, db.get], CONFIG);
    const { transport: { metronome }, midi } = getState();
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
        CHANGE_MIDI_OUTPUT
    ], changeConfig, db, getState);
}

