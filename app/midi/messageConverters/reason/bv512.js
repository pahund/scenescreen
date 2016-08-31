/**
 * bv512.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import button from "../processors/button";
import range from "../processors/range";
import fullRange from "../processors/fullRange";
import named from "../processors/named";
import messages from "../messages";

const mapping = new Map([
    [
        "enabled", {
            name: "BV512 enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "shift", {
            name: "BV512 shift",
            controller: 0xa,
            processor: range(-64, 63)
        }
    ],
    [
        "band-count", {
            name: "BV512 band count",
            controller: 0xc,
            processor: named(4, 8, 16, 32, "fft")
        }
    ],
    [
        "voc-eq", {
            name: "BV512 vocoder/equalizer",
            controller: 0xd,
            processor: named("vocoder", "equalizer")
        }
    ],
    [
        "dry-wet", {
            name: "BV512 dry/wet",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "band1", {
            name: "BV512 band 1 level",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "band2", {
            name: "BV512 band 2 level",
            controller: 0x10,
            processor: fullRange
        }
    ],
    [
        "band3", {
            name: "BV512 band 3 level",
            controller: 0x11,
            processor: fullRange
        }
    ],
    [
        "band4", {
            name: "BV512 band 4 level",
            controller: 0x12,
            processor: fullRange
        }
    ],
    [
        "band5", {
            name: "BV512 band 5 level",
            controller: 0x13,
            processor: fullRange
        }
    ],
    [
        "band6", {
            name: "BV512 band 6 level",
            controller: 0x14,
            processor: fullRange
        }
    ],
    [
        "band7", {
            name: "BV512 band 7 level",
            controller: 0x15,
            processor: fullRange
        }
    ],
    [
        "band8", {
            name: "BV512 band 8 level",
            controller: 0x16,
            processor: fullRange
        }
    ],
    [
        "band9", {
            name: "BV512 band 9 level",
            controller: 0x17,
            processor: fullRange
        }
    ],
    [
        "band10", {
            name: "BV512 band 10 level",
            controller: 0x18,
            processor: fullRange
        }
    ],
    [
        "band11", {
            name: "BV512 band 11 level",
            controller: 0x19,
            processor: fullRange
        }
    ],
    [
        "band12", {
            name: "BV512 band 12 level",
            controller: 0x1a,
            processor: fullRange
        }
    ],
    [
        "band13", {
            name: "BV512 band 13 level",
            controller: 0x1b,
            processor: fullRange
        }
    ],
    [
        "band14", {
            name: "BV512 band 14 level",
            controller: 0x1c,
            processor: fullRange
        }
    ],
    [
        "band15", {
            name: "BV512 band 15 level",
            controller: 0x1d,
            processor: fullRange
        }
    ],
    [
        "band16", {
            name: "BV512 band 16 level",
            controller: 0x1e,
            processor: fullRange
        }
    ],
    [
        "hold", {
            name: "BV512 hold on/off",
            controller: 0x40,
            processor: button
        }
    ],
    [
        "decay", {
            name: "BV512 decay",
            controller: 0x48,
            processor: fullRange
        }
    ],
    [
        "attack", {
            name: "BV512 attack",
            controller: 0x49,
            processor: fullRange
        }
    ],
    [
        "hf-emph", {
            name: "BV512 HF emphasis",
            controller: 0x4a,
            processor: fullRange
        }
    ],
    [
        "band17", {
            name: "BV512 band 17 level",
            controller: 0x66,
            processor: fullRange
        }
    ],
    [
        "band18", {
            name: "BV512 band 18 level",
            controller: 0x67,
            processor: fullRange
        }
    ],
    [
        "band19", {
            name: "BV512 band 19 level",
            controller: 0x68,
            processor: fullRange
        }
    ],
    [
        "band20", {
            name: "BV512 band 20 level",
            controller: 0x69,
            processor: fullRange
        }
    ],
    [
        "band21", {
            name: "BV512 band 21 level",
            controller: 0x6a,
            processor: fullRange
        }
    ],
    [
        "band22", {
            name: "BV512 band 22 level",
            controller: 0x6b,
            processor: fullRange
        }
    ],
    [
        "band23", {
            name: "BV512 band 23 level",
            controller: 0x6c,
            processor: fullRange
        }
    ],
    [
        "band24", {
            name: "BV512 band 24 level",
            controller: 0x6d,
            processor: fullRange
        }
    ],
    [
        "band25", {
            name: "BV512 band 25 level",
            controller: 0x6e,
            processor: fullRange
        }
    ],
    [
        "band26", {
            name: "BV512 band 26 level",
            controller: 0x6f,
            processor: fullRange
        }
    ],
    [
        "band27", {
            name: "BV512 band 27 level",
            controller: 0x70,
            processor: fullRange
        }
    ],
    [
        "band28", {
            name: "BV512 band 28 level",
            controller: 0x71,
            processor: fullRange
        }
    ],
    [
        "band29", {
            name: "BV512 band 29 level",
            controller: 0x72,
            processor: fullRange
        }
    ],
    [
        "band30", {
            name: "BV512 band 30 level",
            controller: 0x73,
            processor: fullRange
        }
    ],
    [
        "band31", {
            name: "BV512 band 31 level",
            controller: 0x74,
            processor: fullRange
        }
    ],
    [
        "band32", {
            name: "BV512 band 32 level",
            controller: 0x75,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
