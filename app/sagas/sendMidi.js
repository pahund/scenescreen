/**
 * sendMidi.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { takeEvery } from "redux-saga";
import { SEND_MIDI } from "../actions";

function *sendMidi(getState, { messages }) {
    const { midiOutput } = getState();
    messages.forEach(message => midiOutput.send(message));
}

export default function *(getState) {
    yield* takeEvery(SEND_MIDI, sendMidi, getState);
}
