/**
 * requestFileOpenDialog.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jul 2016
 */
import { REQUEST_FILE_OPEN_DIALOG } from "../actions";
import { ipcRenderer } from "electron";
import { takeLatest } from "redux-saga";

function *requestFileOpenDialog() {
    ipcRenderer.send("open");
}

export default function *() {
    yield* takeLatest(REQUEST_FILE_OPEN_DIALOG, requestFileOpenDialog);
}
