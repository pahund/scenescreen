/**
 * kong.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import fullRange from "../processors/fullRange";
import messages from "../messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "Kong mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "master-level", {
            name: "Kong master level",
            controller: 0x7,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
