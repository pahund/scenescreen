/**
 * openFile.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import { takeLatest } from "redux-saga";
import { put } from "redux-saga/effects";
import { OPEN_FILE } from "../actions";
import updateScenes from "../actions/updateScenes";
import getCombinatorMessages from "../midi/getCombinatorMessages";

function *openFile({ data: { scenes } }) {
    const populatedScenes = scenes.map(scene => {
        const populatedScene = {
            name: scene.name,
            color: scene["text-color"],
            bgColor: scene["background-color"]
        };
        const messages = [];
        Object.keys(scene.channels).forEach(channelName => {
            const channelNumber = parseInt(channelName, 10);
            const channel = scene.channels[channelName];
            switch (channel.device) {
                case "combinator":
                    messages.push(...getCombinatorMessages(channelNumber, channel));
                    break;
                default:
            }
        });
        populatedScene.messages = messages;
        return populatedScene;
    });
    yield put(updateScenes(populatedScenes));
}

export default function *() {
    yield* takeLatest(OPEN_FILE, openFile);
}

