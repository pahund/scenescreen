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

function *transport(getState, { type }) {
    const { midiOutput, transport: { clock, state } } = getState();
    if (type === PLAY) {
        switch (state) {
            case STOPPED:
                clock.start();
                midiOutput.send(clockMessage.start);
                yield put(changeTransportState(PLAYING));
                break;
            case PAUSED:
                clock.continue();
                midiOutput.send(clockMessage.continue);
                yield put(changeTransportState(PLAYING));
                break;
            default:
        }
    }
    if (type === STOP) {
        switch (state) {
            case PLAYING:
                clock.stop();
                midiOutput.send(clockMessage.stop);
                yield put(changeTransportState(PAUSED));
                break;
            case PAUSED:
                midiOutput.send(clockMessage.goToStart);
                yield put(changeTransportState(STOPPED));
                break;
            default:
        }
    }
}

export default function *(getState) {
    yield takeLatest([PLAY, STOP], transport, getState);
}
