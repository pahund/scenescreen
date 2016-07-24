/**
 * subtractor.js
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
            name: "Subtractor mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "portamento", {
            name: "Subtractor portamento",
            controller: 0x5,
            processor: fullRange
        }
    ],
    [
        "master-level", {
            name: "Subtractor master level",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "filter-env-attack", {
            name: "Subtractor filter envelope attack",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "filter-env-decay", {
            name: "Subtractor filter envelope decay",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "filter-env-sustain", {
            name: "Subtractor filter envelope sustain",
            controller: 0x10,
            processor: fullRange
        }
    ],
    [
        "filter-env-release", {
            name: "Subtractor filter envelope release",
            controller: 0x11,
            processor: fullRange
        }
    ],
    [
        "filter-env-amount", {
            name: "Subtractor filter envelope amount",
            controller: 0x12,
            processor: fullRange
        }
    ],
    [
        "filter-env-invert", {
            name: "Subtractor filter envelope invert",
            controller: 0x13,
            processor: button
        }
    ],
    [
        "amp-env-decay", {
            name: "Subtractor amp envelope decay",
            controller: 0x9,
            processor: fullRange
        }
    ],
    [
        "amp-env-sustain", {
            name: "Subtractor amp envelope sustain",
            controller: 0xc,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
