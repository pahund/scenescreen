import { app, BrowserWindow, Menu, dialog, ipcMain } from "electron";
import fs from "fs";

let menu;
let template;
let mainWindow = null;

if (process.env.NODE_ENV === "development") {
    require("electron-debug")(); // eslint-disable-line global-require
}

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

const installExtensions = async() => {
    if (process.env.NODE_ENV === "development") {
        const installer =
            require("electron-devtools-installer"); // eslint-disable-line global-require
        const extensions = [
            "REACT_DEVELOPER_TOOLS",
            "REDUX_DEVTOOLS"
        ];
        for (const name of extensions) {
            try {
                await installer.default(installer[name]);
            } catch (e) {} // eslint-disable-line no-empty
        }
    }
};

app.on("ready", async() => {
    await installExtensions();

    mainWindow = new BrowserWindow({
        show: false,
        width: 1024,
        height: 728,
        acceptFirstMouse: true,
        minWidth: 175,
        minHeight: 220
    });

    mainWindow.loadURL(`file://${__dirname}/app/app.html`);

    mainWindow.webContents.on("did-finish-load", () => {
        mainWindow.show();
        mainWindow.focus();
    });

    mainWindow.on("closed", () => {
        app.quit();
    });

    if (process.env.NODE_ENV === "development") {
        mainWindow.openDevTools();
        mainWindow.webContents.on("context-menu", (e, props) => {
            const { x, y } = props;

            Menu.buildFromTemplate([{
                label: "Inspect element",
                click() {
                    mainWindow.inspectElement(x, y);
                }
            }]).popup(mainWindow);
        });
    }

    if (process.platform === "darwin") {
        template = [{
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
                label: "Open",
                accelerator: "Command+O",
                selector: "open:",
                click: open
            }]
        }, {
            label: "View",
            submenu: (process.env.NODE_ENV === "development") ? [{
                label: "Reload",
                accelerator: "Command+R",
                click() {
                    mainWindow.webContents.reload();
                }
            }, {
                label: "Toggle Full Screen",
                accelerator: "Ctrl+Command+F",
                click() {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            }, {
                label: "Toggle Developer Tools",
                accelerator: "Alt+Command+I",
                click() {
                    mainWindow.toggleDevTools();
                }
            }] : [{
                label: "Toggle Full Screen",
                accelerator: "Ctrl+Command+F",
                click() {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            }]
        }, {
            label: "Window",
            submenu: [{
                label: "Minimize",
                accelerator: "Command+M",
                selector: "performMiniaturize:"
            }, {
                label: "Close",
                accelerator: "Command+W",
                selector: "performClose:"
            }, {
                type: "separator"
            }, {
                label: "Bring All to Front",
                selector: "arrangeInFront:"
            }]
        }];

        menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    } else {
        template = [{
            label: "&File",
            submenu: [{
                label: "&Open",
                accelerator: "Ctrl+O",
                click: open
            }, {
                label: "&Close",
                accelerator: "Ctrl+W",
                click() {
                    mainWindow.close();
                }
            }]
        }, {
            label: "&View",
            submenu: (process.env.NODE_ENV === "development") ? [{
                label: "&Reload",
                accelerator: "Ctrl+R",
                click() {
                    mainWindow.webContents.reload();
                }
            }, {
                label: "Toggle &Full Screen",
                accelerator: "F11",
                click() {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            }, {
                label: "Toggle &Developer Tools",
                accelerator: "Alt+Ctrl+I",
                click() {
                    mainWindow.toggleDevTools();
                }
            }] : [{
                label: "Toggle &Full Screen",
                accelerator: "F11",
                click() {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            }]
        }];
        menu = Menu.buildFromTemplate(template);
        mainWindow.setMenu(menu);
    }
});

function open() {
    const options = {
        title: "SceneScreen: Open",
        properties: [
            "openFile"
        ],
        filters: [
            { name: "SceneScreen Files", extensions: ["scsc"] }
        ]
    };

    const files = dialog.showOpenDialog(options);

    if (!files) {
        return;
    }

    let data;
    try {
        data = JSON.parse(fs.readFileSync(files[0], "utf8"));
        if (!data.scenes) {
            throw new Error("invalid file contents");
        }
    } catch (e) {
        dialog.showErrorBox(
            "SceneScreen Error",
            "Could not read the file you specified – are you sure it was created " +
            "with SceneScreen?"
        );
        return;
    }
    mainWindow.webContents.send("file-open", data);
    mainWindow.setTitle(`SceneScreen – ${files[0].replace(/^.*[\\\/]/, "")}`);
}

ipcMain.on("error", (event, data) => {
    dialog.showErrorBox("SceneScreen Error", data.message);
});

ipcMain.on("open", () => {
    open();
});
