/**
 * transport.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Jul 2016
 */
import { takeLatest } from "redux-saga";
import { PLAY, STOP } from "../actions";
import { put } from "redux-saga/effects";
import changeTransportState, { PLAYING, STOPPED, PAUSED } from "../actions/changeTransportState";
import clockMessage from "../midi/clockMessage";
import updateBeatBar from "../actions/updateBeatBar";

function *transport(getState, { type }) {
    const { midi: { outputs, selectedOutput }, transport: { metronome, state } } = getState();
    const midiOutput = outputs.get(selectedOutput);
    if (type === PLAY) {
        switch (state) {
            case STOPPED:
                metronome.start();
                midiOutput.send(clockMessage.start);
                yield put(changeTransportState(PLAYING));
                break;
            case PAUSED:
                metronome.start();
                midiOutput.send(clockMessage.continue);
                yield put(changeTransportState(PLAYING));
                break;
            default:
        }
    }
    if (type === STOP) {
        switch (state) {
            case PLAYING:
                metronome.stop();
                midiOutput.send(clockMessage.stop);
                yield put(changeTransportState(PAUSED));
                break;
            case PAUSED:
                metronome.reset();
                midiOutput.send(clockMessage.goToStart);
                yield put(changeTransportState(STOPPED));
                yield put(updateBeatBar(1, 1));
                break;
            default:
        }
    }
}

export default function *(getState) {
    yield takeLatest([PLAY, STOP], transport, getState);
}
