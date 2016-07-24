/**
 * devices.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import combinator from "./reason/combinator";
import mixerMasterSection from "./reason/mixerMasterSection";
import mixerChannelStrip from "./reason/mixerChannelStrip";
import mixer142 from "./reason/mixer142";
import lineMixer from "./reason/lineMixer";
import id8 from "./reason/id8";
import neptune from "./reason/neptune";
import mClassEqualizer from "./reason/mClassEqualizer";
import mClassStereoImager from "./reason/mClassStereoImager";
import mClassCompressor from "./reason/mClassCompressor";
import mClassMaximizer from "./reason/mClassMaximizer";
import audiomatic from "./reason/audiomatic";
import pulsar from "./reason/pulsar";

export default new Map([
    [
        "rsn-mixer-master-section", {
            name: "Reason mixer master section",
            converter: mixerMasterSection
        }
    ],
    [
        "rsn-combinator", {
            name: "Reason Combinator",
            converter: combinator
        }
    ],
    [
        "rsn-mixer-channel-strip", {
            name: "Reason mixer channel strip",
            converter: mixerChannelStrip
        }
    ],
    [
        "rsn-mixer142", {
            name: "Reason mixer 14:2",
            converter: mixer142
        }
    ],
    [
        "rsn-line-mixer", {
            name: "Reason line mixer 6:2",
            converter: lineMixer
        }
    ],
    [
        "rsn-id8", {
            name: "Reason ID8",
            converter: id8
        }
    ],
    [
        "rsn-neptune", {
            name: "Reason Neptune",
            converter: neptune
        }
    ],
    [
        "rsn-mclass-equalizer", {
            name: "Reason MClass Equalizer",
            converter: mClassEqualizer
        }
    ],
    [
        "rsn-mclass-stereo-imager", {
            name: "Reason MClass Stereo Imager",
            converter: mClassStereoImager
        }
    ],
    [
        "rsn-mclass-compressor", {
            name: "Reason MClass Compressor",
            converter: mClassCompressor
        }
    ],
    [
        "rsn-mclass-maximizer", {
            name: "Reason MClass Maximizer",
            converter: mClassMaximizer
        }
    ],
    [
        "rsn-audiomatic", {
            name: "Reason Audiomatic",
            converter: audiomatic
        }
    ],
    [
        "rsn-pulsar", {
            name: "Reason Pulsar",
            converter: pulsar
        }
    ]
]);

