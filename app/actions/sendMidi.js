/**
 * sendMidi.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { SEND_MIDI } from ".";
export default messages => ({
    type: SEND_MIDI,
    messages
});
