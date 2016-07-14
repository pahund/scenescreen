/**
 * changeTempo.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jul 2016
 */
import { CHANGE_TEMPO } from "..";

export default tempo => ({
    type: CHANGE_TEMPO,
    tempo
});
