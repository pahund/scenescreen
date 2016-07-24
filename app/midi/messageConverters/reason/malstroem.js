/**
 * malstroem.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import fullRange from "../processors/fullRange";
import button from "../processors/button";
import messages from "../messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "Malström mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "portamento", {
            name: "Malström portamento",
            controller: 0x5,
            processor: fullRange
        }
    ],
    [
        "master-volume", {
            name: "Malström master volume",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "filter-env-attack", {
            name: "Malström filter envelope attack",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "filter-env-decay", {
            name: "Malström filter envelope decay",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "filter-env-sustain", {
            name: "Malström filter envelope sustain",
            controller: 0x10,
            processor: fullRange
        }
    ],
    [
        "filter-env-release", {
            name: "Malström filter envelope release",
            controller: 0x11,
            processor: fullRange
        }
    ],
    [
        "filter-env-amount", {
            name: "Malström filter envelope amount",
            controller: 0x12,
            processor: fullRange
        }
    ],
    [
        "filter-env-invert", {
            name: "Malström filter envelope invert",
            controller: 0x13,
            processor: button
        }
    ]
]);

export default messages(mapping);
