/**
 * updateMidiConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 11 Jul 2016
 */
import { UPDATE_MIDI_CONFIG } from ".";

export default midiConfig => ({
    type: UPDATE_MIDI_CONFIG,
    midiConfig
});
