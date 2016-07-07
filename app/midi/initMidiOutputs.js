/**
 * initMidiOutputs.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 04 Jul 2016
 */
export default () => {
    if (!navigator.requestMIDIAccess) {
        return Promise.reject(new Error("No MIDI support in your browser."));
    }
    return navigator.requestMIDIAccess({ sysex: false })
        .then(({ outputs }) => {
            if (outputs.size === 0) {
                throw new Error("No MIDI output ports available.");
            }
            return outputs;
        });
};
