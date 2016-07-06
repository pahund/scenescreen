/**
 * initWinMenu.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import { Menu } from "electron";
export default appWindow => {
    const template = [{
        label: "&File",
        submenu: [{
            label: "&Open…",
            accelerator: "Ctrl+O",
            click: () => open(appWindow)
        }, {
            label: "&Close",
            accelerator: "Ctrl+W",
            click() {
                appWindow.close();
            }
        }]
    }, {
        label: "&View",
        submenu: (process.env.NODE_ENV === "development") ? [{
            label: "&Reload",
            accelerator: "Ctrl+R",
            click() {
                appWindow.webContents.reload();
            }
        }, {
            label: "Toggle &Full Screen",
            accelerator: "F11",
            click() {
                appWindow.setFullScreen(!appWindow.isFullScreen());
            }
        }, {
            label: "Toggle &Developer Tools",
            accelerator: "Alt+Ctrl+I",
            click() {
                appWindow.toggleDevTools();
            }
        }] : [{
            label: "Toggle &Full Screen",
            accelerator: "F11",
            click() {
                appWindow.setFullScreen(!appWindow.isFullScreen());
            }
        }]
    }];
    const menu = Menu.buildFromTemplate(template);
    appWindow.setMenu(menu);
};
