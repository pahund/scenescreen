/**
 * transport.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jul 2016
 */
import {
    CHANGE_TRANSPORT_STATE,
    UPDATE_BEAT_BAR,
    TOGGLE_AUTOPILOT
} from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case CHANGE_TRANSPORT_STATE:
            return {
                ...state,
                state: action.state
            };
        case UPDATE_BEAT_BAR:
            return {
                ...state,
                bar: action.bar,
                beat: action.beat
            };
        case TOGGLE_AUTOPILOT:
            return {
                ...state,
                autopilotActive: !state.autopilotActive
            };
        default:
    }
    return state;
};
