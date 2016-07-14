/**
 * test.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 14 Jul 2016
 */
import { TEST } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case TEST:
            console.log("test reducer:", action.message); // eslint-disable-line no-console
            return action.message;
        default:
    }
    return state;
};
