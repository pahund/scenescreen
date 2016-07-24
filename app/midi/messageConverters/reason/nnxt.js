/**
 * nnxt.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import fullRange from "../processors/fullRange";
import messages from "../messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "NN-XT mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "master-volume", {
            name: "NN-XT master volume",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "amp-env-decay", {
            name: "NN-XT amp envelope decay",
            controller: 0x9,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
