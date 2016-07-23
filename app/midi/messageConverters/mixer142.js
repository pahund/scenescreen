/**
 * mixer142.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 23 Jul 2016
 */
import fullRange from "./processors/fullRange";
import messages from "./messages";

const mapping = new Map([
    [
        "master-level", {
            name: "mixer 14:2 master level",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "channel1-level", {
            name: "mixer 14:2 channel 1 level",
            controller: 0x8,
            processor: fullRange
        }
    ],
    [
        "channel2-level", {
            name: "mixer 14:2 channel 2 level",
            controller: 0x9,
            processor: fullRange
        }
    ],
    [
        "channel3-level", {
            name: "mixer 14:2 channel 3 level",
            controller: 0xa,
            processor: fullRange
        }
    ],
    [
        "channel4-level", {
            name: "mixer 14:2 channel 4 level",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "channel5-level", {
            name: "mixer 14:2 channel 5 level",
            controller: 0xd,
            processor: fullRange
        }
    ],
    [
        "channel6-level", {
            name: "mixer 14:2 channel 6 level",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "channel7-level", {
            name: "mixer 14:2 channel 7 level",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "channel8-level", {
            name: "mixer 14:2 channel 8 level",
            controller: 0x10,
            processor: fullRange
        }
    ],
    [
        "channel9-level", {
            name: "mixer 14:2 channel 9 level",
            controller: 0x11,
            processor: fullRange
        }
    ],
    [
        "channel10-level", {
            name: "mixer 14:2 channel 10 level",
            controller: 0x12,
            processor: fullRange
        }
    ],
    [
        "channel11-level", {
            name: "mixer 14:2 channel 11 level",
            controller: 0x13,
            processor: fullRange
        }
    ],
    [
        "channel12-level", {
            name: "mixer 14:2 channel 12 level",
            controller: 0x14,
            processor: fullRange
        }
    ],
    [
        "channel13-level", {
            name: "mixer 14:2 channel 13 level",
            controller: 0x15,
            processor: fullRange
        }
    ],
    [
        "channel14-level", {
            name: "mixer 14:2 channel 14 level",
            controller: 0x16,
            processor: fullRange
        }
    ],
    [
        "channel1-pan", {
            name: "mixer 14:2 channel 1 pan",
            controller: 0x17,
            processor: fullRange
        }
    ],
    [
        "channel2-pan", {
            name: "mixer 14:2 channel 2 pan",
            controller: 0x18,
            processor: fullRange
        }
    ],
    [
        "channel3-pan", {
            name: "mixer 14:2 channel 3 pan",
            controller: 0x19,
            processor: fullRange
        }
    ],
    [
        "channel4-pan", {
            name: "mixer 14:2 channel 4 pan",
            controller: 0x1a,
            processor: fullRange
        }
    ],
    [
        "channel5-pan", {
            name: "mixer 14:2 channel 5 pan",
            controller: 0x1b,
            processor: fullRange
        }
    ],
    [
        "channel6-pan", {
            name: "mixer 14:2 channel 6 pan",
            controller: 0x1c,
            processor: fullRange
        }
    ],
    [
        "channel7-pan", {
            name: "mixer 14:2 channel 7 pan",
            controller: 0x1d,
            processor: fullRange
        }
    ],
    [
        "channel8-pan", {
            name: "mixer 14:2 channel 8 pan",
            controller: 0x1e,
            processor: fullRange
        }
    ],
    [
        "channel9-pan", {
            name: "mixer 14:2 channel 9 pan",
            controller: 0x1f,
            processor: fullRange
        }
    ],
    [
        "channel10-pan", {
            name: "mixer 14:2 channel 10 pan",
            controller: 0x21,
            processor: fullRange
        }
    ],
    [
        "channel11-pan", {
            name: "mixer 14:2 channel 11 pan",
            controller: 0x22,
            processor: fullRange
        }
    ],
    [
        "channel12-pan", {
            name: "mixer 14:2 channel 12 pan",
            controller: 0x23,
            processor: fullRange
        }
    ],
    [
        "channel13-pan", {
            name: "mixer 14:2 channel 13 pan",
            controller: 0x24,
            processor: fullRange
        }
    ],
    [
        "channel14-pan", {
            name: "mixer 14:2 channel 14 pan",
            controller: 0x25,
            processor: fullRange
        }
    ],
    [
        "channel1-aux-send1", {
            name: "mixer 14:2 channel 1 aux send 1",
            controller: 0x27,
            processor: fullRange
        }
    ],
    [
        "channel2-aux-send1", {
            name: "mixer 14:2 channel 2 aux send 1",
            controller: 0x28,
            processor: fullRange
        }
    ],
    [
        "channel3-aux-send1", {
            name: "mixer 14:2 channel 3 aux send 1",
            controller: 0x29,
            processor: fullRange
        }
    ],
    [
        "channel4-aux-send1", {
            name: "mixer 14:2 channel 4 aux send 1",
            controller: 0x2a,
            processor: fullRange
        }
    ],
    [
        "channel5-aux-send1", {
            name: "mixer 14:2 channel 5 aux send 1",
            controller: 0x2b,
            processor: fullRange
        }
    ],
    [
        "channel6-aux-send1", {
            name: "mixer 14:2 channel 6 aux send 1",
            controller: 0x2c,
            processor: fullRange
        }
    ],
    [
        "channel7-aux-send1", {
            name: "mixer 14:2 channel 7 aux send 1",
            controller: 0x2d,
            processor: fullRange
        }
    ],
    [
        "channel8-aux-send1", {
            name: "mixer 14:2 channel 8 aux send 1",
            controller: 0x2e,
            processor: fullRange
        }
    ],
    [
        "channel9-aux-send1", {
            name: "mixer 14:2 channel 9 aux send 1",
            controller: 0x2f,
            processor: fullRange
        }
    ],
    [
        "channel10-aux-send1", {
            name: "mixer 14:2 channel 10 aux send 1",
            controller: 0x30,
            processor: fullRange
        }
    ],
    [
        "channel11-aux-send1", {
            name: "mixer 14:2 channel 11 aux send 1",
            controller: 0x31,
            processor: fullRange
        }
    ],
    [
        "channel12-aux-send1", {
            name: "mixer 14:2 channel 12 aux send 1",
            controller: 0x32,
            processor: fullRange
        }
    ],
    [
        "channel13-aux-send1", {
            name: "mixer 14:2 channel 13 aux send 1",
            controller: 0x33,
            processor: fullRange
        }
    ],
    [
        "channel14-aux-send1", {
            name: "mixer 14:2 channel 14 aux send 1",
            controller: 0x34,
            processor: fullRange
        }
    ],
    [
        "channel1-aux-send2", {
            name: "mixer 14:2 channel 1 aux send 2",
            controller: 0x35,
            processor: fullRange
        }
    ],
    [
        "channel2-aux-send2", {
            name: "mixer 14:2 channel 2 aux send 2",
            controller: 0x36,
            processor: fullRange
        }
    ],
    [
        "channel3-aux-send2", {
            name: "mixer 14:2 channel 3 aux send 2",
            controller: 0x37,
            processor: fullRange
        }
    ],
    [
        "channel4-aux-send2", {
            name: "mixer 14:2 channel 4 aux send 2",
            controller: 0x38,
            processor: fullRange
        }
    ],
    [
        "channel5-aux-send2", {
            name: "mixer 14:2 channel 5 aux send 2",
            controller: 0x39,
            processor: fullRange
        }
    ],
    [
        "channel6-aux-send2", {
            name: "mixer 14:2 channel 6 aux send 2",
            controller: 0x3a,
            processor: fullRange
        }
    ],
    [
        "channel7-aux-send2", {
            name: "mixer 14:2 channel 7 aux send 2",
            controller: 0x3b,
            processor: fullRange
        }
    ],
    [
        "channel8-aux-send2", {
            name: "mixer 14:2 channel 8 aux send 2",
            controller: 0x3c,
            processor: fullRange
        }
    ],
    [
        "channel9-aux-send2", {
            name: "mixer 14:2 channel 9 aux send 2",
            controller: 0x3d,
            processor: fullRange
        }
    ],
    [
        "channel10-aux-send2", {
            name: "mixer 14:2 channel 10 aux send 2",
            controller: 0x3e,
            processor: fullRange
        }
    ],
    [
        "channel11-aux-send2", {
            name: "mixer 14:2 channel 11 aux send 2",
            controller: 0x3f,
            processor: fullRange
        }
    ],
    [
        "channel12-aux-send2", {
            name: "mixer 14:2 channel 12 aux send 2",
            controller: 0x41,
            processor: fullRange
        }
    ],
    [
        "channel13-aux-send2", {
            name: "mixer 14:2 channel 13 aux send 2",
            controller: 0x42,
            processor: fullRange
        }
    ],
    [
        "channel14-aux-send2", {
            name: "mixer 14:2 channel 14 aux send 2",
            controller: 0x43,
            processor: fullRange
        }
    ],
    [
        "channel1-bass", {
            name: "mixer 14:2 channel 1 bass",
            controller: 0x44,
            processor: fullRange
        }
    ],
    [
        "channel2-bass", {
            name: "mixer 14:2 channel 2 bass",
            controller: 0x45,
            processor: fullRange
        }
    ],
    [
        "channel3-bass", {
            name: "mixer 14:2 channel 3 bass",
            controller: 0x46,
            processor: fullRange
        }
    ],
    [
        "channel4-bass", {
            name: "mixer 14:2 channel 4 bass",
            controller: 0x47,
            processor: fullRange
        }
    ],
    [
        "channel5-bass", {
            name: "mixer 14:2 channel 5 bass",
            controller: 0x48,
            processor: fullRange
        }
    ],
    [
        "channel6-bass", {
            name: "mixer 14:2 channel 6 bass",
            controller: 0x49,
            processor: fullRange
        }
    ],
    [
        "channel7-bass", {
            name: "mixer 14:2 channel 7 bass",
            controller: 0x4a,
            processor: fullRange
        }
    ],
    [
        "channel8-bass", {
            name: "mixer 14:2 channel 8 bass",
            controller: 0x4b,
            processor: fullRange
        }
    ],
    [
        "channel9-bass", {
            name: "mixer 14:2 channel 9 bass",
            controller: 0x4c,
            processor: fullRange
        }
    ],
    [
        "channel10-bass", {
            name: "mixer 14:2 channel 10 bass",
            controller: 0x4d,
            processor: fullRange
        }
    ],
    [
        "channel11-bass", {
            name: "mixer 14:2 channel 11 bass",
            controller: 0x4e,
            processor: fullRange
        }
    ],
    [
        "channel12-bass", {
            name: "mixer 14:2 channel 12 bass",
            controller: 0x4f,
            processor: fullRange
        }
    ],
    [
        "channel13-bass", {
            name: "mixer 14:2 channel 13 bass",
            controller: 0x50,
            processor: fullRange
        }
    ],
    [
        "channel14-bass", {
            name: "mixer 14:2 channel 14 bass",
            controller: 0x51,
            processor: fullRange
        }
    ],
    [
        "channel1-treble", {
            name: "mixer 14:2 channel 1 treble",
            controller: 0x52,
            processor: fullRange
        }
    ],
    [
        "channel2-treble", {
            name: "mixer 14:2 channel 2 treble",
            controller: 0x53,
            processor: fullRange
        }
    ],
    [
        "channel3-treble", {
            name: "mixer 14:2 channel 3 treble",
            controller: 0x54,
            processor: fullRange
        }
    ],
    [
        "channel4-treble", {
            name: "mixer 14:2 channel 4 treble",
            controller: 0x55,
            processor: fullRange
        }
    ],
    [
        "channel5-treble", {
            name: "mixer 14:2 channel 5 treble",
            controller: 0x56,
            processor: fullRange
        }
    ],
    [
        "channel6-treble", {
            name: "mixer 14:2 channel 6 treble",
            controller: 0x57,
            processor: fullRange
        }
    ],
    [
        "channel7-treble", {
            name: "mixer 14:2 channel 7 treble",
            controller: 0x58,
            processor: fullRange
        }
    ],
    [
        "channel8-treble", {
            name: "mixer 14:2 channel 8 treble",
            controller: 0x59,
            processor: fullRange
        }
    ],
    [
        "channel9-treble", {
            name: "mixer 14:2 channel 9 treble",
            controller: 0x5a,
            processor: fullRange
        }
    ],
    [
        "channel10-treble", {
            name: "mixer 14:2 channel 10 treble",
            controller: 0x5b,
            processor: fullRange
        }
    ],
    [
        "channel11-treble", {
            name: "mixer 14:2 channel 11 treble",
            controller: 0x5c,
            processor: fullRange
        }
    ],
    [
        "channel12-treble", {
            name: "mixer 14:2 channel 12 treble",
            controller: 0x5d,
            processor: fullRange
        }
    ],
    [
        "channel13-treble", {
            name: "mixer 14:2 channel 13 treble",
            controller: 0x5e,
            processor: fullRange
        }
    ],
    [
        "channel14-treble", {
            name: "mixer 14:2 channel 14 treble",
            controller: 0x5f,
            processor: fullRange
        }
    ],
    [
        "channel1-aux-send3", {
            name: "mixer 14:2 channel 1 aux send 3",
            controller: 0x66,
            processor: fullRange
        }
    ],
    [
        "channel2-aux-send3", {
            name: "mixer 14:2 channel 2 aux send 3",
            controller: 0x67,
            processor: fullRange
        }
    ],
    [
        "channel3-aux-send3", {
            name: "mixer 14:2 channel 3 aux send 3",
            controller: 0x68,
            processor: fullRange
        }
    ],
    [
        "channel4-aux-send3", {
            name: "mixer 14:2 channel 4 aux send 3",
            controller: 0x69,
            processor: fullRange
        }
    ],
    [
        "channel5-aux-send3", {
            name: "mixer 14:2 channel 5 aux send 3",
            controller: 0x6a,
            processor: fullRange
        }
    ],
    [
        "channel6-aux-send3", {
            name: "mixer 14:2 channel 6 aux send 3",
            controller: 0x6b,
            processor: fullRange
        }
    ],
    [
        "channel7-aux-send3", {
            name: "mixer 14:2 channel 7 aux send 3",
            controller: 0x6c,
            processor: fullRange
        }
    ],
    [
        "channel8-aux-send3", {
            name: "mixer 14:2 channel 8 aux send 3",
            controller: 0x6d,
            processor: fullRange
        }
    ],
    [
        "channel9-aux-send3", {
            name: "mixer 14:2 channel 9 aux send 3",
            controller: 0x6e,
            processor: fullRange
        }
    ],
    [
        "channel10-aux-send3", {
            name: "mixer 14:2 channel 10 aux send 3",
            controller: 0x6f,
            processor: fullRange
        }
    ],
    [
        "channel11-aux-send3", {
            name: "mixer 14:2 channel 11 aux send 3",
            controller: 0x70,
            processor: fullRange
        }
    ],
    [
        "channel12-aux-send3", {
            name: "mixer 14:2 channel 12 aux send 3",
            controller: 0x71,
            processor: fullRange
        }
    ],
    [
        "channel13-aux-send3", {
            name: "mixer 14:2 channel 13 aux send 3",
            controller: 0x72,
            processor: fullRange
        }
    ],
    [
        "channel14-aux-send3", {
            name: "mixer 14:2 channel 14 aux send 3",
            controller: 0x73,
            processor: fullRange
        }
    ],
    [
        "aux-return1-level", {
            name: "mixer 14:2 aux return 1 level",
            controller: 0x74,
            processor: fullRange
        }
    ],
    [
        "aux-return2-level", {
            name: "mixer 14:2 aux return 2 level",
            controller: 0x75,
            processor: fullRange
        }
    ],
    [
        "aux-return3-level", {
            name: "mixer 14:2 aux return 3 level",
            controller: 0x76,
            processor: fullRange
        }
    ],
    [
        "aux-return4-level", {
            name: "mixer 14:2 aux return 4 level",
            controller: 0x77,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
