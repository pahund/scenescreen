/**
 * changeMidiOutput.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import { CHANGE_MIDI_OUTPUT } from ".";

export default midiOutputId => ({
    type: CHANGE_MIDI_OUTPUT,
    midiOutputId
});
