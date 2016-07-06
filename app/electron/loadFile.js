/**
 * loadFile.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import fs from "fs";
import { dialog } from "electron";

export default (appWindow, path) => {
    let data;
    try {
        data = JSON.parse(fs.readFileSync(path, "utf8"));
        if (!data.scenes) {
            throw new Error("invalid file contents");
        }
    } catch (e) {
        dialog.showErrorBox(
            "SceneScreen Error",
            "Could not read the file you specified – are you sure it was created " +
            "with SceneScreen?"
        );
        return;
    }
    appWindow.webContents.send("file-open", data);
    appWindow.setTitle(`SceneScreen – ${path.replace(/^.*[\\\/]/, "")}`);
};
