import { app, BrowserWindow, Menu, dialog, ipcMain } from "electron";
import open from "./app/electron/menu/open";
import restoreLastFile from "./app/electron/restoreLastFile";
import initMacMenu from "./app/electron/menu/initMacMenu";
import initWinMenu from "./app/electron/menu/initWinMenu";
import installExtensions from "./app/electron/installExtensions";
import loadConfig from "./app/electron/config/loadConfig";
import updateConfig from "./app/electron/config/updateConfig";

if (process.env.NODE_ENV === "development") {
    require("electron-debug")(); // eslint-disable-line global-require
}

app.on("ready", async() => {
    await installExtensions();

    let config = loadConfig();

    if (!config) {
        config = {
            width: 660,
            height: 610
        };
    }

    const mainWindow = new BrowserWindow({
        show: false,
        acceptFirstMouse: true,
        minWidth: 175,
        minHeight: 220,
        width: config.width,
        height: config.height,
        x: config.x,
        y: config.y
    });

    mainWindow.loadURL(`file://${__dirname}/app/app.html`);

    mainWindow.webContents.on("did-finish-load", () => {
        mainWindow.show();
        mainWindow.focus();
        if (config.fullscreen) {
            mainWindow.setFullScreen(true);
        }
    });

    mainWindow.on("close", () => {
        const { x, y, width, height } = mainWindow.getBounds();
        const fullscreen = mainWindow.isFullScreen();
        updateConfig({ x, y, width, height, fullscreen });
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
        initMacMenu(app, mainWindow);
    } else {
        initWinMenu(mainWindow);
    }

    ipcMain.on("error", (event, data) => {
        dialog.showErrorBox("SceneScreen Error", data.message);
    });

    ipcMain.on("open", () => open(mainWindow));

    ipcMain.on("ready-to-rock", () => restoreLastFile(mainWindow));
});

