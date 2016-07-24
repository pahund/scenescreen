/**
 * redrum.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import messages from "../messages";
import fullRange from "../processors/fullRange";

const mapping = new Map([
    [
        "master-level", {
            name: "Redrum master level",
            controller: 0x7,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
