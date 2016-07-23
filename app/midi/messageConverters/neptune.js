/**
 * neptune.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 23 Jul 2016
 */
import fullRange from "./processors/fullRange";
import button from "./processors/button";
import enabled from "./processors/enabled";
import range from "./processors/range";
import messages from "./messages";

const mapping = new Map([
    [
        "vibrato", {
            name: "Neptune mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "pitched-signal", {
            name: "Neptune pitched signal",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "enabled", {
            name: "Neptune enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "pitch-adjust-on", {
            name: "Neptune pitch adjust on",
            controller: 0xc,
            processor: button
        }
    ],
    [
        "scale-memory", {
            name: "Neptune scale memory",
            controller: 0xd,
            processor: scaleMemory
        }
    ],
    [
        "correction-speed", {
            name: "Neptune correction speed",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "preserve-expression", {
            name: "Neptune preserve expression",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "transpose-on", {
            name: "Neptune transpose on",
            controller: 0x10,
            processor: button
        }
    ],
    [
        "semi", {
            name: "Neptune semi",
            controller: 0x11,
            processor: range(-12, 12)
        }
    ],
    [
        "cent", {
            name: "Neptune cent",
            controller: 0x12,
            processor: range(-50, 50)
        }
    ],
    [
        "formant-on", {
            name: "Neptune formant on",
            controller: 0x13,
            processor: button
        }
    ],
    [
        "formant-shift", {
            name: "Neptune formant shift",
            controller: 0x14,
            processor: range(-64, 63)
        }
    ],
    [
        "voice-synth", {
            name: "Neptune voice synth",
            controller: 0x15,
            processor: fullRange
        }
    ],
    [
        "pitch-bend-range", {
            name: "Neptune pitch bend range",
            controller: 0x27,
            processor: range(0, 24)
        }
    ],
    [
        "vibrato-rate", {
            name: "Neptune vibrato rate",
            controller: 0x28,
            processor: fullRange
        }
    ]
]);

function scaleMemory(value, name) {
    if (typeof value !== "number") {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value < 1 || value > 4) {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be a number from 1 to 4"
        );
    }
    return value - 1;
}

export default messages(mapping);
