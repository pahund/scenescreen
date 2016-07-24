/**
 * scream4.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import fullRange from "../processors/fullRange";
import messages from "../messages";

const mapping = new Map([
    [
        "enabled", {
            name: "Scream 4 enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "master-level", {
            name: "Scream 4 master level",
            controller: 0x7,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
