/**
 * id8.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 23 Jul 2016
 */
import fullRange from "./processors/fullRange";
import messages from "./messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "ID8 mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "volume", {
            name: "ID8 volume",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "parameter1", {
            name: "ID8 parameter 1",
            controller: 0x47,
            processor: fullRange
        }
    ],
    [
        "parameter2", {
            name: "ID8 parameter 2",
            controller: 0x48,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
