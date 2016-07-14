/**
 * test.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 14 Jul 2016
 */
import { takeEvery } from "redux-saga";
import { TEST } from "../actions";

function *test({ message }) {
    console.log("test saga", message); // eslint-disable-line no-console
}

export default function *() {
    yield takeEvery(TEST, test);
}
