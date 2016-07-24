/**
 * rpg8.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import fullRange from "../processors/fullRange";
import messages from "../messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "RPG-8 mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
