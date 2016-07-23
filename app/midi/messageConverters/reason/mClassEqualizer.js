/**
 * mClassEqualizer.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 23 Jul 2016
 */
import enabled from "../processors/enabled";
import fullRange from "../processors/fullRange";
import button from "../processors/button";
import messages from "../messages";

const mapping = new Map([
    [
        "enabled", {
            name: "MClass Equalizer enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "param1-gain", {
            name: "MClass Equalizer param 1 gain",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "param2-gain", {
            name: "MClass Equalizer param 2 gain",
            controller: 0xd,
            processor: fullRange
        }
    ],
    [
        "lo-shelf-gain", {
            name: "MClass Equalizer lo shelf gain",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "hi-shelf-gain", {
            name: "MClass Equalizer hi shelf gain",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "lo-cut-on", {
            name: "MClass Equalizer lo cut on",
            controller: 0x10,
            processor: button
        }
    ],
    [
        "lo-shelf-on", {
            name: "MClass Equalizer lo shelf on",
            controller: 0x11,
            processor: button
        }
    ],
    [
        "param1-on", {
            name: "MClass Equalizer param 1 on",
            controller: 0x12,
            processor: button
        }
    ],
    [
        "param2-on", {
            name: "MClass Equalizer param 2 on",
            controller: 0x13,
            processor: button
        }
    ],
    [
        "hi-shelf-on", {
            name: "MClass Equalizer hi shelf on",
            controller: 0x14,
            processor: button
        }
    ],
    [
        "param1-q", {
            name: "MClass Equalizer param 1 Q",
            controller: 0x47,
            processor: fullRange
        }
    ],
    [
        "param1-freq", {
            name: "MClass Equalizer param 1 freq",
            controller: 0x4a,
            processor: fullRange
        }
    ],
    [
        "param2-q", {
            name: "MClass Equalizer param 2 Q",
            controller: 0x4e,
            processor: fullRange
        }
    ],
    [
        "param2-freq", {
            name: "MClass Equalizer param 2 freq",
            controller: 0x4f,
            processor: fullRange
        }
    ],
    [
        "lo-shelf-q", {
            name: "MClass Equalizer lo shelf Q",
            controller: 0x50,
            processor: fullRange
        }
    ],
    [
        "lo-shelf-freq", {
            name: "MClass Equalizer lo shelf freq",
            controller: 0x51,
            processor: fullRange
        }
    ],
    [
        "hi-shelf-q", {
            name: "MClass Equalizer hi shelf Q",
            controller: 0x52,
            processor: fullRange
        }
    ],
    [
        "hi-shelf-freq", {
            name: "MClass Equalizer hi shelf freq",
            controller: 0x53,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
