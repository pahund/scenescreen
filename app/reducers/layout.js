/**
 * layout.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { UPDATE_LAYOUT } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_LAYOUT:
            return action.layout;
        default:
    }
    return state;
};
