/**
 * sendMidi.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { takeEvery } from "redux-saga";
import { SEND_MIDI } from "../actions";
import { PLAYING } from "../actions/changeTransportState";

function *sendMidi(getState, { messages }) {
    const { midiOutput, transport: { metronome, state } } = getState();
    if (state === PLAYING) {
        metronome.schedule(1, 1, () => {
            messages.forEach(message => midiOutput.send(message));
        });
    } else {
        messages.forEach(message => midiOutput.send(message));
    }
}

export default function *(getState) {
    yield* takeEvery(SEND_MIDI, sendMidi, getState);
}
