/**
 * updateConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import loadConfig from "./loadConfig";
import saveConfig from "./saveConfig";

export default addConfig => {
    const prevConfig = loadConfig();
    let nextConfig;
    if (!prevConfig) {
        nextConfig = addConfig;
    } else {
        nextConfig = {
            ...prevConfig,
            ...addConfig
        };
    }
    saveConfig(nextConfig);
};
