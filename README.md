![SceneScreen](./docs/images/scenescreen_256x256.png)

Control your MIDI software through predefined scenes.

## Installation

Prerequisites: [Node.js, at least version 6.2.2](https://nodejs.org/).

```
npm install
```

### MIDI Setup

To use SceneScreen to control a music software such as 
[Propellerheads Reason](https://www.propellerheads.se/reason), you need to set up a MIDI interface
on your machine first.

On a Mac this is done with Audio MIDI Setup:

![Mac MIDI Setup](./docs/images/mac-midi-setup.png)

## Running in Dev Mode

Run these two commands in separate console tabs:

```
npm run hot-server
npm run start-hot
```

## Creating a Build Package

```
npm run package
```

To package apps for all platforms:

```
npm run package-all
```

## License
MIT © [Patrick Hund](https://github.com/pahund)

## Acknowledgements

Based on [Electron React Boilerplate](https://github.com/chentsulin/electron-react-boilerplate).

MIT © [C. T. Lin](https://github.com/chentsulin)
