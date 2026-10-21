# TyperZ

TyperZ is a free, open-source typing speed test that runs locally on Windows. The app has no accounts, advertisements, analytics, network requests, or runtime dependency on a CDN. Your personal-best score is stored in the app's local browser storage.

## Use the web version

Open `typing_test_mvp.html` in a modern browser. The page and its styling are self-contained and can be used offline.

## Run the Windows desktop app

Install [Node.js](https://nodejs.org/) on the computer used to build the app, then from this folder run:

```powershell
npm install
npm start
```

To create a portable 64-bit Windows executable:

```powershell
npm run package:win
```

The resulting `TyperZ-1.0.0-Windows-x64.exe` is written to `dist`. It does not need to be installed and can run without an internet connection. The first dependency install and packaging build do require internet access to download Electron and its build tools; the finished executable does not.

## Open source

TyperZ is released under the MIT License. See [LICENSE](./LICENSE).
