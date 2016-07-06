/**
 * loadConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import configPath from "./configPath";
import fs from "fs";

export default () => {
    let config = null;
    try {
        config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    } catch (e) {
        /* this can be safely ignored – there is no config, e.g. because the
         * app has been started for the first time */
    }
    return config;
};
