/**
 * clock.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jul 2016
 */
import { CHANGE_TRANSPORT_STATE } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case CHANGE_TRANSPORT_STATE:
            return {
                ...state,
                state: action.state
            };
        default:
    }
    return state;
};
