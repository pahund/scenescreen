/**
 * openFile.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { takeLatest } from "redux-saga";
import { put } from "redux-saga/effects";
import { ipcRenderer } from "electron";

import { OPEN_FILE, RELOAD_FILE } from "../actions";
import updateScenes from "../actions/updateScenes";
import getCurrentSceneIndex from "../utils/getCurrentSceneIndex";

import combinator from "../midi/messageConverters/reason/combinator";
import mixerMasterSection from "../midi/messageConverters/reason/mixerMasterSection";
import mixerChannelStrip from "../midi/messageConverters/reason/mixerChannelStrip";
import mixer142 from "../midi/messageConverters/reason/mixer142";
import lineMixer from "../midi/messageConverters/reason/lineMixer";
import id8 from "../midi/messageConverters/reason/id8";
import neptune from "../midi/messageConverters/reason/neptune";
import mClassEqualizer from "../midi/messageConverters/reason/mClassEqualizer";
import mClassStereoImager from "../midi/messageConverters/reason/mClassStereoImager";

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
                    case "rsn-mixer-master-section":
                        try {
                            messages.push(...mixerMasterSection(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for Reason mixer master " +
                                "section, MIDI channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    case "rsn-combinator":
                        try {
                            messages.push(...combinator(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for Combinator device, " +
                                "MIDI channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    case "rsn-mixer-channel-strip":
                        try {
                            messages.push(...mixerChannelStrip(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for mixer " +
                                "channel strip device, MIDI channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    case "rsn-mixer142":
                        try {
                            messages.push(...mixer142(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for mixer " +
                                "14:2 device, MIDI channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    case "rsn-line-mixer":
                        try {
                            messages.push(...lineMixer(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for line mixer " +
                                "device, MIDI channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    case "rsn-id8":
                        try {
                            messages.push(...id8(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for ID8 " +
                                "device, MIDI channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    case "rsn-neptune":
                        try {
                            messages.push(...neptune(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for Neptune " +
                                "device, MIDI channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    case "rsn-mclass-equalizer":
                        try {
                            messages.push(...mClassEqualizer(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for MClass " +
                                "Equalizer device, MIDI channel " +
                                `${channelNumber} in scene “${populatedScene.name}” – ${e.message}`
                            );
                        }
                        break;
                    case "rsn-mclass-stereo-imager":
                        try {
                            messages.push(...mClassStereoImager(channelNumber, channel));
                        } catch (e) {
                            throw new Error(
                                "Could not create controller message for MClass " +
                                "Stereo Imager device, MIDI channel " +
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

