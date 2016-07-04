/**
 * initConfig.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 04 Jul 2016
 */

// there is a bug with PouchDB and webpack HMR, using index-browser as workaraound
// https://github.com/pouchdb/pouchdb/issues/5312
import PouchDB from "pouchdb/lib/index-browser";

export const CONFIG = "CONFIG";

const defaultConfig = {
    tempo: 120
};

export default () => {
    const db = new PouchDB("scenescreen");
    return db.get(CONFIG).catch(error => {
        if (error.status === 404) {
            /* eslint-disable no-console */
            console.info("No existing configuration found, using default");
            /* eslint-enable no-console */
            const config = {
                ...defaultConfig,
                _id: CONFIG
            };
            return db.put(config).then(() => config);
        }
        throw error;
    });
};

