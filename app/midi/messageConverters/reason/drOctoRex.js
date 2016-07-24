/**
 * drOctoRex.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import fullRange from "../processors/fullRange";
import messages from "../messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "Dr. Octo Rex mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "master-volume", {
            name: "Dr. Octo Rex master volume",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "filter-env-attack", {
            name: "Dr. Octo Rex filter envelope attack",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "filter-env-decay", {
            name: "Dr. Octo Rex filter envelope decay",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "filter-env-sustain", {
            name: "Dr. Octo Rex filter envelope sustain",
            controller: 0x10,
            processor: fullRange
        }
    ],
    [
        "filter-env-release", {
            name: "Dr. Octo Rex filter envelope release",
            controller: 0x11,
            processor: fullRange
        }
    ],
    [
        "filter-env-amount", {
            name: "Dr. Octo Rex filter envelope amount",
            controller: 0x12,
            processor: fullRange
        }
    ],
    [
        "amp-env-decay", {
            name: "Dr. Octo Rex amp envelope decay",
            controller: 0x9,
            processor: fullRange
        }
    ],
    [
        "amp-env-sustain", {
            name: "Dr. Octo Rex amp envelope sustain",
            controller: 0xc,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
