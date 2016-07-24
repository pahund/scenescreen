/**
 * ph90.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import messages from "../messages";

const mapping = new Map([
    [
        "enabled", {
            name: "PH-90 enabled",
            controller: 0x9,
            processor: enabled
        }
    ]
]);

export default messages(mapping);
