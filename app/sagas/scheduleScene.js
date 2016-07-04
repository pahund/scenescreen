/**
 * scheduleScene.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 04 Jul 2016
 */
import { takeLatest, delay } from "redux-saga";
import { call, put, cancelled } from "redux-saga/effects";
import { SCHEDULE_SCENE } from "../actions";
import blinkScene from "../actions/blinkScene";
import selectScene from "../actions/selectScene";

function *scheduleScene(getState, { sceneIndex }) {
    try {
        const { transport: { metronome, bar, beat }, config: { bars, beatsPerBar } } = getState();
        let barIndex = bar;
        let beatIndex = beat + 1;
        if (beatIndex > beatsPerBar) {
            beatIndex = 1;
            barIndex++;
        }
        while (barIndex <= bars && beatIndex <= beatsPerBar) {
            yield call([metronome, metronome.waitForBeat], barIndex, beatIndex);
            yield put(blinkScene(sceneIndex, true));
            yield delay(5);
            yield put(blinkScene(sceneIndex, false));
            beatIndex++;
            if (beatIndex > beatsPerBar) {
                beatIndex = 1;
                barIndex++;
            }
        }
        yield call([metronome, metronome.waitForBeat], 1, 1);
        yield put(selectScene(sceneIndex));
    } finally {
        if (yield cancelled()) {
            yield put(blinkScene(sceneIndex, false));
        }
    }
}

export default function *(getState) {
    yield* takeLatest(SCHEDULE_SCENE, scheduleScene, getState);
}

