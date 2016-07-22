/**
 * getMixerMasterMessages.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 21 Jul 2016
 */
import controllerMessage from "./controllerMessage";

const mapping = new Map([
    [
        "master-level", {
            name: "master level",
            controller: 0x7,
            processor: processFullRange
        }
    ],
    [
        "insert-fx-bypass", {
            name: "insert FX bypass",
            controller: 0x9,
            processor: processButton
        }
    ],
    [
        "compressor-threshold", {
            name: "compressor threshold",
            controller: 0xc,
            processor: processFullRange
        }
    ],
    [
        "compressor-attack", {
            name: "compressor attack",
            controller: 0xd,
            processor: processSixSteps
        }
    ],
    [
        "compressor-release", {
            name: "compressor release",
            controller: 0xe,
            processor: processMasterCompressorRelease
        }
    ],
    [
        "compressor-key", {
            name: "compressor key",
            controller: 0xf,
            processor: processButton
        }
    ],
    [
        "compressor-ratio", {
            name: "compressor ratio",
            controller: 0x10,
            processor: processMasterCompressorRatio
        }
    ],
    [
        "compressor-on", {
            name: "compressor on",
            controller: 0x11,
            processor: processButton
        }
    ],
    [
        "compressor-make-up", {
            name: "compressor make-up",
            controller: 0x12,
            processor: processFullRange
        }
    ],
    [
        "send-fx1-pan", {
            name: "send FX 1 pan",
            controller: 0x17,
            processor: processFullRange
        }
    ],
    [
        "send-fx2-pan", {
            name: "send FX 2 pan",
            controller: 0x18,
            processor: processFullRange
        }
    ],
    [
        "send-fx3-pan", {
            name: "send FX 3 pan",
            controller: 0x19,
            processor: processFullRange
        }
    ],
    [
        "send-fx4-pan", {
            name: "send FX 4 pan",
            controller: 0x1a,
            processor: processFullRange
        }
    ],
    [
        "send-fx5-pan", {
            name: "send FX 5 pan",
            controller: 0x1b,
            processor: processFullRange
        }
    ],
    [
        "send-fx6-pan", {
            name: "send FX 6 pan",
            controller: 0x1c,
            processor: processFullRange
        }
    ],
    [
        "send-fx7-pan", {
            name: "send FX 7 pan",
            controller: 0x1d,
            processor: processFullRange
        }
    ],
    [
        "send-fx8-pan", {
            name: "send FX 8 pan",
            controller: 0x1e,
            processor: processFullRange
        }
    ],
    [
        "send-fx1-send-level", {
            name: "send FX 1 send level",
            controller: 0x27,
            processor: processFullRange
        }
    ],
    [
        "send-fx2-send-level", {
            name: "send FX 2 send level",
            controller: 0x28,
            processor: processFullRange
        }
    ],
    [
        "send-fx3-send-level", {
            name: "send FX 3 send level",
            controller: 0x29,
            processor: processFullRange
        }
    ],
    [
        "send-fx4-send-level", {
            name: "send FX 4 send level",
            controller: 0x2a,
            processor: processFullRange
        }
    ],
    [
        "send-fx5-send-level", {
            name: "send FX 5 send level",
            controller: 0x2b,
            processor: processFullRange
        }
    ],
    [
        "send-fx6-send-level", {
            name: "send FX 6 send level",
            controller: 0x2c,
            processor: processFullRange
        }
    ],
    [
        "send-fx7-send-level", {
            name: "send FX 7 send level",
            controller: 0x2d,
            processor: processFullRange
        }
    ],
    [
        "send-fx8-send-level", {
            name: "send FX 8 send level",
            controller: 0x2e,
            processor: processFullRange
        }
    ],
    [
        "send-fx1-return-level", {
            name: "send FX 1 return level",
            controller: 0x2f,
            processor: processFullRange
        }
    ],
    [
        "send-fx2-return-level", {
            name: "send FX 2 return level",
            controller: 0x30,
            processor: processFullRange
        }
    ],
    [
        "send-fx3-return-level", {
            name: "send FX 3 return level",
            controller: 0x31,
            processor: processFullRange
        }
    ],
    [
        "send-fx4-return-level", {
            name: "send FX 4 return level",
            controller: 0x32,
            processor: processFullRange
        }
    ],
    [
        "send-fx5-return-level", {
            name: "send FX 5 return level",
            controller: 0x33,
            processor: processFullRange
        }
    ],
    [
        "send-fx6-return-level", {
            name: "send FX 6 return level",
            controller: 0x34,
            processor: processFullRange
        }
    ],
    [
        "send-fx7-return-level", {
            name: "send FX 7 return level",
            controller: 0x35,
            processor: processFullRange
        }
    ],
    [
        "send-fx8-return-level", {
            name: "send FX 8 return level",
            controller: 0x36,
            processor: processFullRange
        }
    ],
    [
        "insert-fx-rotary1", {
            name: "insert FX rotary 1",
            controller: 0x47,
            processor: processFullRange
        }
    ],
    [
        "insert-fx-rotary2", {
            name: "insert FX rotary 2",
            controller: 0x48,
            processor: processFullRange
        }
    ],
    [
        "insert-fx-rotary3", {
            name: "insert FX rotary 3",
            controller: 0x49,
            processor: processFullRange
        }
    ],
    [
        "insert-fx-rotary4", {
            name: "insert FX rotary 4",
            controller: 0x4a,
            processor: processFullRange
        }
    ],
    [
        "insert-fx-button1", {
            name: "insert FX button 1",
            controller: 0x4b,
            processor: processButton
        }
    ],
    [
        "insert-fx-button2", {
            name: "insert FX button 2",
            controller: 0x4c,
            processor: processButton
        }
    ],
    [
        "insert-fx-button3", {
            name: "insert FX button 3",
            controller: 0x4d,
            processor: processButton
        }
    ],
    [
        "insert-fx-button4", {
            name: "insert FX button 4",
            controller: 0x4e,
            processor: processButton
        }
    ],
    [
        "send-fx1-mute", {
            name: "send FX 1 mute",
            controller: 0x66,
            processor: processButton
        }
    ],
    [
        "send-fx2-mute", {
            name: "send FX 2 mute",
            controller: 0x67,
            processor: processButton
        }
    ],
    [
        "send-fx3-mute", {
            name: "send FX 3 mute",
            controller: 0x68,
            processor: processButton
        }
    ],
    [
        "send-fx4-mute", {
            name: "send FX 4 mute",
            controller: 0x69,
            processor: processButton
        }
    ],
    [
        "send-fx5-mute", {
            name: "send FX 5 mute",
            controller: 0x6a,
            processor: processButton
        }
    ],
    [
        "send-fx6-mute", {
            name: "send FX 6 mute",
            controller: 0x6b,
            processor: processButton
        }
    ],
    [
        "send-fx7-mute", {
            name: "send FX 7 mute",
            controller: 0x6c,
            processor: processButton
        }
    ],
    [
        "send-fx8-mute", {
            name: "send FX 8 mute",
            controller: 0x6d,
            processor: processButton
        }
    ]
]);

function processFullRange(value, name) {
    if (typeof value !== "number") {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value < 0 || value > 127) {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”, ` +
            "it must be a number from 0 to 127"
        );
    }
    return value;
}

function processSixSteps(value, name) {
    if (typeof value !== "number") {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value < 0 || value > 5) {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”, ` +
            "it must be a number from 0 to 5"
        );
    }
    return value * 24;
}

function processMasterCompressorRelease(value, name) {
    if (typeof value !== "number" && value !== "auto") {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value === "auto") {
        return 120;
    }
    if (value < 0 || value > 3) {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”, ` +
            "it must be a number from 0 to 3 or “auto”"
        );
    }
    return value * 30;
}

function processMasterCompressorRatio(value, name) {
    if (typeof value !== "number") {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value !== 2 && value !== 4 && value !== 10) {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”, ` +
            "it must be 2, 4 or 10"
        );
    }
    return value === 2 ? 0 : value === 4 ? 1 : 10;
}

function processButton(value, name) {
    if (value !== "on" && value !== "off") {
        throw new Error(
            `“${value}” is not valid for mixer master control “${name}”. ` +
            "Valid are: “on” or “off”"
        );
    }
    return value === "on" ? 1 : 0;
}

export default (channelNumber, data) => {
    const messages = [];
    for (const [key, value] of mapping) {
        if (data[key] !== undefined) {
            messages.push(controllerMessage(
                channelNumber,
                value.controller,
                value.processor(data[key], value.name)
            ));
        }
    }
    return messages;
};
