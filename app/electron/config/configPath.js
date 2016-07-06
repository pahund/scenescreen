/**
 * getConfigPath.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import path from "path";
import os from "os";

const configPath = path.join(os.homedir(), ".scenescreen");

export default configPath;
