/**
 * changeConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jul 2016
 */
import {
    CHANGE_BARS,
    CHANGE_BEATS_PER_BAR,
    CHANGE_TEMPO
} from "../actions";
import {
    CONFIG,
    DB_NAME
} from "../config/initConfig";
import { takeEvery } from "redux-saga";
import { call } from "redux-saga/effects";
import PouchDB from "pouchdb/lib/index-browser";

function *changeConfig(db, getState, action) {
    const config = yield call([db, db.get], CONFIG);
    const { transport: { metronome } } = getState();
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
        default:
    }
    yield call([db, db.put], config);
}

export default function *(getState) {
    const db = new PouchDB(DB_NAME);
    yield takeEvery([CHANGE_BARS, CHANGE_BEATS_PER_BAR, CHANGE_TEMPO], changeConfig, db, getState);
}

