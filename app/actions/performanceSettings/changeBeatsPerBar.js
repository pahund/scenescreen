/**
 * changeBeatsPerBar.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jul 2016
 */
import { CHANGE_BEATS_PER_BAR } from "..";

export default beatsPerBar => ({
    type: CHANGE_BEATS_PER_BAR,
    beatsPerBar
});
