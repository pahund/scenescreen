/**
 * mClassCompressor.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import fullRange from "../processors/fullRange";
import button from "../processors/button";
import messages from "../messages";

const mapping = new Map([
    [
        "output-gain", {
            name: "MClass Compressor output gain",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "solo-sidechain", {
            name: "MClass Compressor solo sidechain",
            controller: 0x8,
            processor: button
        }
    ],
    [
        "enabled", {
            name: "MClass Compressor enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "threshold", {
            name: "MClass Compressor threshold",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "attack", {
            name: "MClass Compressor attack",
            controller: 0xd,
            processor: fullRange
        }
    ],
    [
        "release", {
            name: "MClass Compressor release",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "adapt-release", {
            name: "MClass Compressor adapt release",
            controller: 0xf,
            processor: button
        }
    ],
    [
        "ratio", {
            name: "MClass Compressor ratio",
            controller: 0x10,
            processor: fullRange
        }
    ],
    [
        "soft-knee", {
            name: "MClass Compressor soft knee",
            controller: 0x11,
            processor: button
        }
    ],
    [
        "input-gain", {
            name: "MClass Compressor input gain",
            controller: 0x13,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
