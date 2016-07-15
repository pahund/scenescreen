/**
 * open.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import { dialog } from "electron";
import loadFile from "../loadFile";
import updateConfig from "../config/updateConfig";

export default (appWindow, fileWatcher) => {
    const options = {
        title: "SceneScreen: Open",
        properties: [
            "openFile"
        ],
        filters: [
            { name: "SceneScreen Files", extensions: ["scsc"] }
        ]
    };

    const files = dialog.showOpenDialog(options);

    if (!files) {
        return;
    }
    const path = files[0];

    loadFile(appWindow, path);
    updateConfig({ path });
    fileWatcher.path = path;
};

