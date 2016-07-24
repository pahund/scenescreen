/**
 * mClassMaximizer.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import fullRange from "../processors/fullRange";
import button from "../processors/button";
import named from "../processors/named";
import messages from "../messages";

const mapping = new Map([
    [
        "output-gain", {
            name: "MClass Maximizer output gain",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "enabled", {
            name: "MClass Maximizer enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "soft-clip-amount", {
            name: "MClass Maximizer soft clip amount",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "attack", {
            name: "MClass Maximizer attack",
            controller: 0xd,
            processor: named("fast", "mid", "slow")
        }
    ],
    [
        "release", {
            name: "MClass Maximizer release",
            controller: 0xe,
            processor: named("fast", "slow", "auto")
        }
    ],
    [
        "look-ahead", {
            name: "MClass Maximizer look ahead",
            controller: 0xf,
            processor: button
        }
    ],
    [
        "limiter", {
            name: "MClass Maximizer limiter",
            controller: 0x10,
            processor: button
        }
    ],
    [
        "soft-clip-on", {
            name: "MClass Maximizer soft clip on",
            controller: 0x11,
            processor: button
        }
    ],
    [
        "meter-mode", {
            name: "MClass Maximizer meter mode",
            controller: 0x12,
            processor: named("peak", "vu")
        }
    ],
    [
        "input-gain", {
            name: "MClass Maximizer input gain",
            controller: 0x13,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
