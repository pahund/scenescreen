/**
 * reloadFile.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import fs from "fs";
import { dialog } from "electron";
import getFileNameFromPath from "./getFileNameFromPath";

export default (appWindow, path) => {
    let data;
    const fileName = getFileNameFromPath(path);
    try {
        data = JSON.parse(fs.readFileSync(path, "utf8"));
        if (!data.scenes) {
            throw new Error("invalid file contents");
        }
    } catch (e) {
        dialog.showErrorBox(
            "SceneScreen Error",
            `Could not reload the file ${fileName} that was recently changed – ` +
            "please check the syntax"
        );
        return;
    }
    appWindow.webContents.send("file-reload", data);
};
