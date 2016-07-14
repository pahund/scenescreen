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
    CHANGE_MIDI_OUTPUT,
    TOGGLE_AUTOPILOT
} from "../actions";
import { CONFIG, DB_NAME } from "../config/initConfig";
import { takeEvery } from "redux-saga";
import { call } from "redux-saga/effects";
import PouchDB from "pouchdb/lib/index-browser";

function *changeConfig(db, getState, action) {
    const config = yield call([db, db.get], CONFIG);
    const { transport: { autopilotActive } } = getState();
    switch (action.type) {
        case CHANGE_BARS:
            config.bars = action.bars;
            break;
        case CHANGE_BEATS_PER_BAR:
            config.beatsPerBar = action.beatsPerBar;
            break;
        case CHANGE_TEMPO:
            config.tempo = action.tempo;
            break;
        case CHANGE_MIDI_OUTPUT:
            config.midiOutputId = action.midiOutputId;
            break;
        case TOGGLE_AUTOPILOT:
            config.autopilotActive = autopilotActive;
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
        CHANGE_MIDI_OUTPUT,
        TOGGLE_AUTOPILOT
    ], changeConfig, db, getState);
}

