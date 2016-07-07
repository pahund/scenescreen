/**
 * navigate.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 07 Jul 2016
 */
import { takeLatest } from "redux-saga";
import { NAVIGATE } from "../actions";
import { hashHistory } from "react-router";

function *navigate({ url }) {
    hashHistory.push(url);
}

export default function *() {
    yield* takeLatest(NAVIGATE, navigate);
}
