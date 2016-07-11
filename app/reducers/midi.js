/**
 * midi.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import {
    UPDATE_MIDI_CONFIG,
    REFRESH_MIDI_OUTPUT_LIST
} from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_MIDI_CONFIG:
            return action.midiConfig;
        default:
    }
    return state;
};
