/**
 * changeTransportState.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jul 2016
 */
import { CHANGE_TRANSPORT_STATE } from ".";

export const PLAYING = "PLAYING";
export const PAUSED = "PAUSED";
export const STOPPED = "STOPPED";

export default state => ({
    type: CHANGE_TRANSPORT_STATE,
    state
});
