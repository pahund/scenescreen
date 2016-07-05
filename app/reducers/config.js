/**
 * config.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 04 Jul 2016
 */
import {
    CHANGE_BARS,
    CHANGE_BEATS_PER_BAR,
    CHANGE_TEMPO
} from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case CHANGE_BARS:
            return {
                ...state,
                bars: action.bars
            };
        case CHANGE_BEATS_PER_BAR:
            return {
                ...state,
                beatsPerBar: action.beatsPerBar
            };
        case CHANGE_TEMPO:
            return {
                ...state,
                tempo: action.tempo
            };
        default:
    }
    return state;
};
