/**
 * installExtensions.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
export default async() => {
    if (process.env.NODE_ENV !== "development") {
        return;
    }
    const installer = require("electron-devtools-installer"); // eslint-disable-line global-require
    const extensions = [
        "REACT_DEVELOPER_TOOLS",
        "REDUX_DEVTOOLS"
    ];
    for (const name of extensions) {
        try {
            await installer.default(installer[name]);
        } catch (e) {} // eslint-disable-line no-empty
    }
};
