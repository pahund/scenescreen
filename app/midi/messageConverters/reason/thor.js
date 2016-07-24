/**
 * thor.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import fullRange from "../processors/fullRange";
import messages from "../messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "Thor mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "portamento", {
            name: "Thor portamento",
            controller: 0x5,
            processor: fullRange
        }
    ],
    [
        "master-volume", {
            name: "Thor master volume",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "filter-env-attack", {
            name: "Thor filter envelope attack",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "filter-env-decay", {
            name: "Thor filter envelope decay",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "filter-env-sustain", {
            name: "Thor filter envelope sustain",
            controller: 0x10,
            processor: fullRange
        }
    ],
    [
        "filter-env-release", {
            name: "Thor filter envelope release",
            controller: 0x11,
            processor: fullRange
        }
    ],
    [
        "amp-env-decay", {
            name: "Thor amp envelope decay",
            controller: 0x9,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
