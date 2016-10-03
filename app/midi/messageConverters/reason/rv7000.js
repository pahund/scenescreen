/**
 * rv7000.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import messages from "../messages";
import range from "../processors/range";
import fullRange from "../processors/fullRange";

const mapping = new Map([
    [
        "enabled", {
            name: "RV7000 enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "hi-eq", {
            name: "RV7000 hi EQ",
            controller: 0xc,
            processor: range(-64, 63)
        }
    ],
    [
        "hf-damp", {
            name: "RV7000 HF damp",
            controller: 0xd,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
