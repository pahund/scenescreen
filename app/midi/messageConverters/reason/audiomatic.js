/**
 * audiomatic.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import fullRange from "../processors/fullRange";
import named from "../processors/named";
import messages from "../messages";

const mapping = new Map([
    [
        "volume", {
            name: "Audiomatic volume",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "enabled", {
            name: "Audiomatic enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "transform", {
            name: "Audiomatic transform",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "dry-wet", {
            name: "Audiomatic dry/wet",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "gain", {
            name: "Audiomatic gain",
            controller: 0x13,
            processor: fullRange
        }
    ],
    [
        "preset", {
            name: "Audiomatic preset",
            controller: 0x4b,
            processor: named(
                "tape", "hi-fi", "bright", "bottom",
                "spread", "radio", "vhs", "vinyl",
                "mp3", "psyche", "cracked", "gadget",
                "circuit", "wash", "pvc", "eerie"
            )
        }
    ]
]);

export default messages(mapping);
