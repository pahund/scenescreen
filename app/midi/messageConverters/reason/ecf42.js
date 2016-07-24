/**
 * ecf42.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import messages from "../messages";

const mapping = new Map([
    [
        "enabled", {
            name: "ECF-42 enabled",
            controller: 0x9,
            processor: enabled
        }
    ]
]);

export default messages(mapping);
