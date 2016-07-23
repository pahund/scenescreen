/**
 * lineMixer.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 23 Jul 2016
 */
import fullRange from "./processors/fullRange";
import messages from "./messages";

const mapping = new Map([
    [
        "master-level", {
            name: "line mixer master level",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "channel1-level", {
            name: "line mixer channel 1 level",
            controller: 0x8,
            processor: fullRange
        }
    ],
    [
        "channel2-level", {
            name: "line mixer channel 2 level",
            controller: 0x9,
            processor: fullRange
        }
    ],
    [
        "channel3-level", {
            name: "line mixer channel 3 level",
            controller: 0xa,
            processor: fullRange
        }
    ],
    [
        "channel4-level", {
            name: "line mixer channel 4 level",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "channel5-level", {
            name: "line mixer channel 5 level",
            controller: 0xd,
            processor: fullRange
        }
    ],
    [
        "channel6-level", {
            name: "line mixer channel 6 level",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "channel1-pan", {
            name: "line mixer channel 1 pan",
            controller: 0x17,
            processor: fullRange
        }
    ],
    [
        "channel2-pan", {
            name: "line mixer channel 2 pan",
            controller: 0x18,
            processor: fullRange
        }
    ],
    [
        "channel3-pan", {
            name: "line mixer channel 3 pan",
            controller: 0x19,
            processor: fullRange
        }
    ],
    [
        "channel4-pan", {
            name: "line mixer channel 4 pan",
            controller: 0x1a,
            processor: fullRange
        }
    ],
    [
        "channel5-pan", {
            name: "line mixer channel 5 pan",
            controller: 0x1b,
            processor: fullRange
        }
    ],
    [
        "channel6-pan", {
            name: "line mixer channel 6 pan",
            controller: 0x1c,
            processor: fullRange
        }
    ],
    [
        "channel1-aux-send", {
            name: "line mixer channel 1 aux send 1",
            controller: 0x27,
            processor: fullRange
        }
    ],
    [
        "channel2-aux-send", {
            name: "line mixer channel 2 aux send 1",
            controller: 0x28,
            processor: fullRange
        }
    ],
    [
        "channel3-aux-send", {
            name: "line mixer channel 3 aux send 1",
            controller: 0x29,
            processor: fullRange
        }
    ],
    [
        "channel4-aux-send", {
            name: "line mixer channel 4 aux send 1",
            controller: 0x2a,
            processor: fullRange
        }
    ],
    [
        "channel5-aux-send", {
            name: "line mixer channel 5 aux send 1",
            controller: 0x2b,
            processor: fullRange
        }
    ],
    [
        "channel6-aux-send", {
            name: "line mixer channel 6 aux send 1",
            controller: 0x2c,
            processor: fullRange
        }
    ],
    [
        "aux-return-level", {
            name: "line mixer aux return level",
            controller: 0x74,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
