/**
 * mClassStereoImager.js
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
        "solo-mode", {
            name: "MClass Stereo Imager solo mode",
            controller: 0x8,
            processor: named("normal", "lo-band", "hi-band")
        }
    ],
    [
        "enabled", {
            name: "MClass Stereo Imager enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "lo-band-width", {
            name: "MClass Stereo Imager lo band width",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "hi-band-width", {
            name: "MClass Stereo Imager hi band width",
            controller: 0xd,
            processor: fullRange
        }
    ],
    [
        "x-over-freq", {
            name: "MClass Stereo Imager x-over freq",
            controller: 0x4a,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
