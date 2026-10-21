"use strict";

const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const appPage = pathToFileURL(path.join(__dirname, "typing_test_mvp.html")).href;

function createWindow() {
    const window = new BrowserWindow({
        width: 1120,
        height: 820,
        minWidth: 680,
        minHeight: 620,
        title: "TyperZ",
        icon: path.join(__dirname, "assets", "typerz.ico"),
        autoHideMenuBar: true,
        backgroundColor: "#10131d",
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
        }
    });

    window.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
    window.webContents.on("will-navigate", (event, url) => {
        if (url !== appPage) event.preventDefault();
    });
    window.loadFile(path.join(__dirname, "typing_test_mvp.html"));
}

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
