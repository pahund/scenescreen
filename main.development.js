/* eslint-disable no-console */
import { app, BrowserWindow, Menu, dialog, ipcMain } from "electron";
import open from "./app/electron/menu/open";
import restoreLastFile from "./app/electron/restoreLastFile";
import initMacMenu from "./app/electron/menu/initMacMenu";
import initWinMenu from "./app/electron/menu/initWinMenu";
import installExtensions from "./app/electron/installExtensions";

if (process.env.NODE_ENV === "development") {
    require("electron-debug")(); // eslint-disable-line global-require
}

app.on("window-all-closed", () => {
    app.quit();
});

app.on("ready", async() => {
    await installExtensions();

    const mainWindow = new BrowserWindow({
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
        initMacMenu(mainWindow);
    } else {
        initWinMenu(mainWindow);
    }

    ipcMain.on("error", (event, data) => {
        dialog.showErrorBox("SceneScreen Error", data.message);
    });

    ipcMain.on("open", () => open(mainWindow));

    ipcMain.on("ready-to-rock", () => restoreLastFile(mainWindow));
});

