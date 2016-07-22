/**
 * getMixerMasterMessages.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 21 Jul 2016
 */
import fullRange from "./processors/fullRange";
import button from "./processors/button";
import getMessages from "./getMessages";

const mapping = new Map([
    [
        "master-level", {
            name: "mixer master level",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "insert-fx-bypass", {
            name: "mixer master insert FX bypass",
            controller: 0x9,
            processor: button
        }
    ],
    [
        "compressor-threshold", {
            name: "mixer master compressor threshold",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "compressor-attack", {
            name: "mixer master compressor attack",
            controller: 0xd,
            processor: processSixSteps
        }
    ],
    [
        "compressor-release", {
            name: "mixer master compressor release",
            controller: 0xe,
            processor: processMasterCompressorRelease
        }
    ],
    [
        "compressor-key", {
            name: "mixer master compressor key",
            controller: 0xf,
            processor: button
        }
    ],
    [
        "compressor-ratio", {
            name: "mixer master compressor ratio",
            controller: 0x10,
            processor: processMasterCompressorRatio
        }
    ],
    [
        "compressor-on", {
            name: "mixer master compressor on",
            controller: 0x11,
            processor: button
        }
    ],
    [
        "compressor-make-up", {
            name: "mixer master compressor make-up",
            controller: 0x12,
            processor: fullRange
        }
    ],
    [
        "send-fx1-pan", {
            name: "mixer master send FX 1 pan",
            controller: 0x17,
            processor: fullRange
        }
    ],
    [
        "send-fx2-pan", {
            name: "mixer master send FX 2 pan",
            controller: 0x18,
            processor: fullRange
        }
    ],
    [
        "send-fx3-pan", {
            name: "mixer master send FX 3 pan",
            controller: 0x19,
            processor: fullRange
        }
    ],
    [
        "send-fx4-pan", {
            name: "mixer master send FX 4 pan",
            controller: 0x1a,
            processor: fullRange
        }
    ],
    [
        "send-fx5-pan", {
            name: "mixer master send FX 5 pan",
            controller: 0x1b,
            processor: fullRange
        }
    ],
    [
        "send-fx6-pan", {
            name: "mixer master send FX 6 pan",
            controller: 0x1c,
            processor: fullRange
        }
    ],
    [
        "send-fx7-pan", {
            name: "mixer master send FX 7 pan",
            controller: 0x1d,
            processor: fullRange
        }
    ],
    [
        "send-fx8-pan", {
            name: "mixer master send FX 8 pan",
            controller: 0x1e,
            processor: fullRange
        }
    ],
    [
        "send-fx1-send-level", {
            name: "mixer master send FX 1 send level",
            controller: 0x27,
            processor: fullRange
        }
    ],
    [
        "send-fx2-send-level", {
            name: "mixer master send FX 2 send level",
            controller: 0x28,
            processor: fullRange
        }
    ],
    [
        "send-fx3-send-level", {
            name: "mixer master send FX 3 send level",
            controller: 0x29,
            processor: fullRange
        }
    ],
    [
        "send-fx4-send-level", {
            name: "mixer master send FX 4 send level",
            controller: 0x2a,
            processor: fullRange
        }
    ],
    [
        "send-fx5-send-level", {
            name: "mixer master send FX 5 send level",
            controller: 0x2b,
            processor: fullRange
        }
    ],
    [
        "send-fx6-send-level", {
            name: "mixer master send FX 6 send level",
            controller: 0x2c,
            processor: fullRange
        }
    ],
    [
        "send-fx7-send-level", {
            name: "mixer master send FX 7 send level",
            controller: 0x2d,
            processor: fullRange
        }
    ],
    [
        "send-fx8-send-level", {
            name: "mixer master send FX 8 send level",
            controller: 0x2e,
            processor: fullRange
        }
    ],
    [
        "send-fx1-return-level", {
            name: "mixer master send FX 1 return level",
            controller: 0x2f,
            processor: fullRange
        }
    ],
    [
        "send-fx2-return-level", {
            name: "mixer master send FX 2 return level",
            controller: 0x30,
            processor: fullRange
        }
    ],
    [
        "send-fx3-return-level", {
            name: "mixer master send FX 3 return level",
            controller: 0x31,
            processor: fullRange
        }
    ],
    [
        "send-fx4-return-level", {
            name: "mixer master send FX 4 return level",
            controller: 0x32,
            processor: fullRange
        }
    ],
    [
        "send-fx5-return-level", {
            name: "mixer master send FX 5 return level",
            controller: 0x33,
            processor: fullRange
        }
    ],
    [
        "send-fx6-return-level", {
            name: "mixer master send FX 6 return level",
            controller: 0x34,
            processor: fullRange
        }
    ],
    [
        "send-fx7-return-level", {
            name: "mixer master send FX 7 return level",
            controller: 0x35,
            processor: fullRange
        }
    ],
    [
        "send-fx8-return-level", {
            name: "mixer master send FX 8 return level",
            controller: 0x36,
            processor: fullRange
        }
    ],
    [
        "insert-fx-rotary1", {
            name: "mixer master insert FX rotary 1",
            controller: 0x47,
            processor: fullRange
        }
    ],
    [
        "insert-fx-rotary2", {
            name: "mixer master insert FX rotary 2",
            controller: 0x48,
            processor: fullRange
        }
    ],
    [
        "insert-fx-rotary3", {
            name: "mixer master insert FX rotary 3",
            controller: 0x49,
            processor: fullRange
        }
    ],
    [
        "insert-fx-rotary4", {
            name: "mixer master insert FX rotary 4",
            controller: 0x4a,
            processor: fullRange
        }
    ],
    [
        "insert-fx-button1", {
            name: "mixer master insert FX button 1",
            controller: 0x4b,
            processor: button
        }
    ],
    [
        "insert-fx-button2", {
            name: "mixer master insert FX button 2",
            controller: 0x4c,
            processor: button
        }
    ],
    [
        "insert-fx-button3", {
            name: "mixer master insert FX button 3",
            controller: 0x4d,
            processor: button
        }
    ],
    [
        "insert-fx-button4", {
            name: "mixer master insert FX button 4",
            controller: 0x4e,
            processor: button
        }
    ],
    [
        "send-fx1-mute", {
            name: "mixer master send FX 1 mute",
            controller: 0x66,
            processor: button
        }
    ],
    [
        "send-fx2-mute", {
            name: "mixer master send FX 2 mute",
            controller: 0x67,
            processor: button
        }
    ],
    [
        "send-fx3-mute", {
            name: "mixer master send FX 3 mute",
            controller: 0x68,
            processor: button
        }
    ],
    [
        "send-fx4-mute", {
            name: "mixer master send FX 4 mute",
            controller: 0x69,
            processor: button
        }
    ],
    [
        "send-fx5-mute", {
            name: "mixer master send FX 5 mute",
            controller: 0x6a,
            processor: button
        }
    ],
    [
        "send-fx6-mute", {
            name: "mixer master send FX 6 mute",
            controller: 0x6b,
            processor: button
        }
    ],
    [
        "send-fx7-mute", {
            name: "mixer master send FX 7 mute",
            controller: 0x6c,
            processor: button
        }
    ],
    [
        "send-fx8-mute", {
            name: "mixer master send FX 8 mute",
            controller: 0x6d,
            processor: button
        }
    ]
]);

function processSixSteps(value, name) {
    if (typeof value !== "number") {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value < 0 || value > 5) {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be a number from 0 to 5"
        );
    }
    return value * 24;
}

function processMasterCompressorRelease(value, name) {
    if (typeof value !== "number" && value !== "auto") {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value === "auto") {
        return 120;
    }
    if (value < 0 || value > 3) {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be a number from 0 to 3 or “auto”"
        );
    }
    return value * 30;
}

function processMasterCompressorRatio(value, name) {
    if (typeof value !== "number") {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value !== 2 && value !== 4 && value !== 10) {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be 2, 4 or 10"
        );
    }
    return value === 2 ? 0 : value === 4 ? 1 : 10;
}

export default getMessages(mapping);
