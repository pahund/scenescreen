/**
 * saveConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import configPath from "./configPath";
import fs from "fs";

export default config => {
    try {
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    } catch (e) {
        /* can be safely ignored */
    }
};

