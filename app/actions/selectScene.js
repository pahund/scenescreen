/**
 * selectScene.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { SELECT_SCENE } from ".";

export default sceneIndex => ({
    type: SELECT_SCENE,
    sceneIndex
});
