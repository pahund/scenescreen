/**
 * updateLayout.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { takeLatest, delay } from "redux-saga";
import { RESIZE } from "../actions";
import { call, put } from "redux-saga/effects";
import updateLayoutAction from "../actions/updateLayout";
import calculateLayoutColumns from "../utils/calculateLayoutColumns";

function *updateLayout() {
    yield call(delay, 100);
    yield put(updateLayoutAction({ columns: calculateLayoutColumns() }));
}

export default function *() {
    yield* takeLatest(RESIZE, updateLayout);
}
