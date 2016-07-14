/**
 * changePerformanceSettings.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 14 Jul 2016
 */
import {
    CHANGE_BARS,
    CHANGE_BEATS_PER_BAR,
    CHANGE_TEMPO
} from "../actions";
import { takeEvery } from "redux-saga";

function *changePerformanceSettings(getState, action) {
    const { transport: { metronome } } = getState();
    switch (action.type) {
        case CHANGE_BARS:
            metronome.bars = action.bars;
            break;
        case CHANGE_BEATS_PER_BAR:
            metronome.beatsPerBar = action.beatsPerBar;
            break;
        case CHANGE_TEMPO:
            metronome.setTempo(action.tempo);
            break;
        default:
    }
}

export default function *(getState) {
    yield takeEvery([
        CHANGE_BARS,
        CHANGE_BEATS_PER_BAR,
        CHANGE_TEMPO
    ], changePerformanceSettings, getState);
}
