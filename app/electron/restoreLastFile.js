/**
 * restoreLastFile.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import fs from "fs";
import loadFile from "./loadFile";
import loadConfig from "./config/loadConfig";

export default (appWindow, fileWatcher) => {
    const config = loadConfig();
    if (config) {
        try {
            fs.accessSync(config.path);
            loadFile(appWindow, config.path);
        } catch (e) {
            /* can be safely ignored, the file that was loaded when the application
             * run the last time does not exist anymore */
        }
        fileWatcher.path = config.path;
    }
};
