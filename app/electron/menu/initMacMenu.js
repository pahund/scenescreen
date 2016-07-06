/**
 * mac.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import { Menu } from "electron";
import open from "./open";

export default appWindow => {
    const template = [{
        label: "SceneScreen",
        submenu: [{
            label: "About SceneScreen",
            selector: "orderFrontStandardAboutPanel:"
        }, {
            type: "separator"
        }, {
            label: "Hide SceneScreen",
            accelerator: "Command+H",
            selector: "hide:"
        }, {
            label: "Hide Others",
            accelerator: "Command+Shift+H",
            selector: "hideOtherApplications:"
        }, {
            label: "Show All",
            selector: "unhideAllApplications:"
        }, {
            type: "separator"
        }, {
            label: "Quit",
            accelerator: "Command+Q",
            click() {
                app.quit();
            }
        }]
    }, {
        label: "File",
        submenu: [{
            label: "Open…",
            accelerator: "Command+O",
            selector: "open:",
            click: () => open(appWindow)
        }, {
            label: "Close",
            accelerator: "Command+W",
            selector: "performClose:"
        }]
    }, {
        label: "View",
        submenu: (process.env.NODE_ENV === "development") ? [{
            label: "Reload",
            accelerator: "Command+R",
            click() {
                appWindow.webContents.reload();
            }
        }, {
            label: "Toggle Full Screen",
            accelerator: "Ctrl+Command+F",
            click() {
                appWindow.setFullScreen(!appWindow.isFullScreen());
            }
        }, {
            label: "Toggle Developer Tools",
            accelerator: "Alt+Command+I",
            click() {
                appWindow.toggleDevTools();
            }
        }] : [{
            label: "Toggle Full Screen",
            accelerator: "Ctrl+Command+F",
            click() {
                appWindow.setFullScreen(!appWindow.isFullScreen());
            }
        }]
    }, {
        label: "Window",
        submenu: [{
            label: "Minimize",
            accelerator: "Command+M",
            selector: "performMiniaturize:"
        }]
    }];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
};

