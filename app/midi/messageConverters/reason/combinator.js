/**
 * combinator.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import fullRange from "../processors/fullRange";
import enabled from "../processors/enabled";
import button from "../processors/button";
import messages from "../messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "Combinator mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "enabled", {
            name: "Combinator enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "rotary1", {
            name: "Combinator rotary 1",
            controller: 0x47,
            processor: fullRange
        }
    ],
    [
        "rotary2", {
            name: "Combinator rotary 2",
            controller: 0x48,
            processor: fullRange
        }
    ],
    [
        "rotary3", {
            name: "Combinator rotary 3",
            controller: 0x49,
            processor: fullRange
        }
    ],
    [
        "rotary4", {
            name: "Combinator rotary 4",
            controller: 0x4a,
            processor: fullRange
        }
    ],
    [
        "button1", {
            name: "Combinator button 1",
            controller: 0x4b,
            processor: button
        }
    ],
    [
        "button2", {
            name: "Combinator button 2",
            controller: 0x4c,
            processor: button
        }
    ],
    [
        "button3", {
            name: "Combinator button 3",
            controller: 0x4d,
            processor: button
        }
    ],
    [
        "button4", {
            name: "Combinator button 4",
            controller: 0x4e,
            processor: button
        }
    ]
]);

export default messages(mapping);
