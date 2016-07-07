/**
 * preferences.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 07 Jul 2016
 */
export default appWindow => {
    appWindow.webContents.send("go-to-preferences");
};
