/**
 * openFile.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { takeLatest } from "redux-saga";
import { put } from "redux-saga/effects";
import { OPEN_FILE, RELOAD_FILE } from "../actions";
import updateScenes from "../actions/updateScenes";
import getCombinatorMessages from "../midi/getCombinatorMessages";
import { ipcRenderer } from "electron";
import getCurrentSceneIndex from "../utils/getCurrentSceneIndex";

function *openFile(getState, { type, data: { scenes } }) {
    let selectedSceneIndex;
    try {
        const populatedScenes = scenes.map((scene, sceneIndex) => {
            const populatedScene = {
                name: scene.name || `Scene ${sceneIndex + 1}`,
                color: scene["text-color"] || "white",
                bgColor: scene["background-color"] || "darkgray"
            };
            if (scene.selected) {
                if (selectedSceneIndex !== undefined) {
                    throw new Error(
                        `Scene ${populatedScene.name}” has property selected, but a previous ` +
                        "scene was already marked as selected"
                    );
                }
                selectedSceneIndex = sceneIndex;
            }

            const messages = [];
            if (!scene.channels) {
                throw new Error(`No channels specified for scene “${populatedScene.name}”`);
            }
            Object.keys(scene.channels).forEach(channelName => {
                const channelNumber = parseInt(channelName, 10);
                if (isNaN(channelNumber) || channelNumber < 1 || channelNumber > 16) {
                    throw new Error(
                        `Illegal MIDI channel number “${channelName}” specified for ` +
                        `scene “${populatedScene.name}”`
                    );
                }
                const channel = scene.channels[channelName];
                if (!channel.device) {
                    throw new Error(
                        `No device specified for channel ${channelNumber} in ` +
                        `scene “${populatedScene.name}”`
                    );
                }
                switch (channel.device) {
                    case "combinator":
                        try {
                            messages.push(...getCombinatorMessages(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    default:
                        throw new Error(
                            `Unknown device “${channel.device}” specified ` +
                            `for channel ${channelNumber} in scene “${populatedScene.name}”`
                        );
                }
            });
            populatedScene.messages = messages;
            return populatedScene;
        });
        if (type === RELOAD_FILE) {
            populatedScenes[getCurrentSceneIndex(getState().scenes)].selected = true;
        } else {
            populatedScenes[
                selectedSceneIndex === undefined ? 0 : selectedSceneIndex
            ].selected = true;
        }

        yield put(updateScenes(populatedScenes));
    } catch (e) {
        ipcRenderer.send(
            "error",
            { message: `Error reading file${e.message ? ` – ${e.message}` : ""}` }
        );
    }
}

export default function *(getState) {
    yield* takeLatest([OPEN_FILE, RELOAD_FILE], openFile, getState);
}

