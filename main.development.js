import { app, BrowserWindow, Menu, shell, dialog } from "electron";
import fs from "fs";

let menu;
let template;
let mainWindow = null;
let currentFilePath = null;

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
        height: 728
    });

    mainWindow.loadURL(`file://${__dirname}/app/app.html`);

    mainWindow.webContents.on("did-finish-load", () => {
        mainWindow.show();
        mainWindow.focus();
    });

    mainWindow.on("closed", () => {
        mainWindow = null;
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
                label: "Services",
                submenu: []
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
            label: "Edit",
            submenu: [{
                label: "Undo",
                accelerator: "Command+Z",
                selector: "undo:"
            }, {
                label: "Redo",
                accelerator: "Shift+Command+Z",
                selector: "redo:"
            }, {
                type: "separator"
            }, {
                label: "Cut",
                accelerator: "Command+X",
                selector: "cut:"
            }, {
                label: "Copy",
                accelerator: "Command+C",
                selector: "copy:"
            }, {
                label: "Paste",
                accelerator: "Command+V",
                selector: "paste:"
            }, {
                label: "Select All",
                accelerator: "Command+A",
                selector: "selectAll:"
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
        }, {
            label: "Help",
            submenu: [{
                label: "Learn More",
                click() {
                    shell.openExternal("http://electron.atom.io");
                }
            }, {
                label: "Documentation",
                click() {
                    shell.openExternal("https://github.com/atom/electron/tree/master/docs#readme");
                }
            }, {
                label: "Community Discussions",
                click() {
                    shell.openExternal("https://discuss.atom.io/c/electron");
                }
            }, {
                label: "Search Issues",
                click() {
                    shell.openExternal("https://github.com/atom/electron/issues");
                }
            }]
        }];

        menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    } else {
        template = [{
            label: "&File",
            submenu: [{
                label: "&Open",
                accelerator: "Ctrl+O"
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
        }, {
            label: "Help",
            submenu: [{
                label: "Learn More",
                click() {
                    shell.openExternal("http://electron.atom.io");
                }
            }, {
                label: "Documentation",
                click() {
                    shell.openExternal("https://github.com/atom/electron/tree/master/docs#readme");
                }
            }, {
                label: "Community Discussions",
                click() {
                    shell.openExternal("https://discuss.atom.io/c/electron");
                }
            }, {
                label: "Search Issues",
                click() {
                    shell.openExternal("https://github.com/atom/electron/issues");
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
        dialog.showErrorBox("SceneScreen Error", "Could not read the file you specified – are you sure it was created " +
            "with SceneScreen?");
        return;
    }
    currentFilePath = files[0];
    mainWindow.webContents.send("file-open", data);
}
