/**
 * autopilot.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 12 Jul 2016
 */
import { takeEvery, delay } from "redux-saga";
import getRandomInt from "../utils/getRandomInt";
import { call, put } from "redux-saga/effects";
import { LOOP_START, TOGGLE_AUTOPILOT } from "../actions";
import { PLAYING } from "../actions/changeTransportState";
import scheduleScene from "../actions/scheduleScene";

function getCurrentSceneIndex(scenes) {
    let currentSceneIndex = 0;
    scenes.forEach((scene, index) => {
        if (scene.selected) {
            currentSceneIndex = index;
        }
    });
    return currentSceneIndex;
}

function getNextSceneIndex(scenes) {
    const currentSceneIndex = getCurrentSceneIndex(scenes);
    let nextSceneIndex = currentSceneIndex;
    while (nextSceneIndex === currentSceneIndex) {
        nextSceneIndex = getRandomInt(0, scenes.length - 1);
    }
    return nextSceneIndex;
}

function *autopilot(getState) {
    const { transport: { state, autopilotActive }, scenes } = getState();
    if (scenes.length < 2) {
        // no automatic changing of scenes if there is only one or none at all
        return;
    }
    if (state !== PLAYING || !autopilotActive) {
        return;
    }
    yield call(delay, 100);
    yield put(scheduleScene(getNextSceneIndex(scenes)));
}

export default function *(getState) {
    yield* takeEvery([LOOP_START, TOGGLE_AUTOPILOT], autopilot, getState);
}
