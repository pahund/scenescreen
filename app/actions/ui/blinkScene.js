/**
 * blinkScene.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 04 Jul 2016
 */
import { BLINK_SCENE } from "..";

export default (sceneIndex, blinking) => ({
    type: BLINK_SCENE,
    blinking,
    sceneIndex
});
