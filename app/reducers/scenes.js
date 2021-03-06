/**
 * scenes.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import {
    SELECT_SCENE,
    UPDATE_SCENES,
    BLINK_SCENE
} from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_SCENE:
            return state.map((scene, sceneIndex) =>
                sceneIndex === action.sceneIndex ? {
                    ...scene,
                    selected: true
                } : {
                    ...scene,
                    selected: false
                }
            );
        case BLINK_SCENE:
            return state.map((scene, sceneIndex) =>
                sceneIndex === action.sceneIndex ? {
                    ...scene,
                    blinking: action.blinking
                } : scene
            );
        case UPDATE_SCENES:
            return action.scenes;
        default:
    }
    return state;
};
