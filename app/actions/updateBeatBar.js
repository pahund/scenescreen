/**
 * updateBeatBar.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 04 Jul 2016
 */
import { UPDATE_BEAT_BAR } from ".";

export default (bar, beat) => ({
    type: UPDATE_BEAT_BAR,
    bar,
    beat
});
