/**
 * devices.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import alligator from "./reason/alligator";
import bv512 from "./reason/bv512";
import cf101 from "./reason/cf101";
import comp01 from "./reason/comp01";
import d11 from "./reason/d11";
import ddl1 from "./reason/ddl1";
import drOctoRex from "./reason/drOctoRex";
import ecf42 from "./reason/ecf42";
import kong from "./reason/kong";
import malstroem from "./reason/malstroem";
import matrix from "./reason/matrix";
import nn19 from "./reason/nn19";
import nnxt from "./reason/nnxt";
import peq2 from "./reason/peq2";
import ph90 from "./reason/ph90";
import pulverizer from "./reason/pulverizer";
import redrum from "./reason/redrum";
import rpg8 from "./reason/rpg8";
import rv7 from "./reason/rv7";
import rv7000 from "./reason/rv7000";
import scream4 from "./reason/scream4";
import subtractor from "./reason/subtractor";
import theEcho from "./reason/theEcho";
import thor from "./reason/thor";
import un16 from "./reason/un16";
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
    ],
    [
        "rsn-alligator", {
            name: "Reason Alligator",
            converter: alligator
        }
    ],
    [
        "rsn-bv512", {
            name: "Reason BV512",
            converter: bv512
        }
    ],
    [
        "rsn-cf101", {
            name: "Reason CF-101",
            converter: cf101
        }
    ],
    [
        "rsn-comp01", {
            name: "Reason COMP-01",
            converter: comp01
        }
    ],
    [
        "rsn-d11", {
            name: "Reason D-11",
            converter: d11
        }
    ],
    [
        "rsn-ddl1", {
            name: "Reason DDL-1",
            converter: ddl1
        }
    ],
    [
        "rsn-dr-octo-rex", {
            name: "Reason Dr. Octo Rex",
            converter: drOctoRex
        }
    ],
    [
        "rsn-ecf42", {
            name: "Reason ECF-42",
            converter: ecf42
        }
    ],
    [
        "rsn-kong", {
            name: "Reason Kong",
            converter: kong
        }
    ],
    [
        "rsn-malstroem", {
            name: "Reason Malström",
            converter: malstroem
        }
    ],
    [
        "rsn-matrix", {
            name: "Reason Matrix",
            converter: matrix
        }
    ],
    [
        "rsn-nn19", {
            name: "Reason NN19",
            converter: nn19
        }
    ],
    [
        "rsn-nnxt", {
            name: "Reason NN-XT",
            converter: nnxt
        }
    ],
    [
        "rsn-peq2", {
            name: "Reason PEQ-2",
            converter: peq2
        }
    ],
    [
        "rsn-ph90", {
            name: "Reason PH-90",
            converter: ph90
        }
    ],
    [
        "rsn-pulverizer", {
            name: "Reason Pulverizer",
            converter: pulverizer
        }
    ],
    [
        "rsn-redrum", {
            name: "Reason Redrum",
            converter: redrum
        }
    ],
    [
        "rsn-rpg8", {
            name: "Reason RPG-8",
            converter: rpg8
        }
    ],
    [
        "rsn-rv7", {
            name: "Reason RV-7",
            converter: rv7
        }
    ],
    [
        "rsn-rv7000", {
            name: "Reason RV7000",
            converter: rv7000
        }
    ],
    [
        "rsn-scream4", {
            name: "Reason Scream 4",
            converter: scream4
        }
    ],
    [
        "rsn-subtractor", {
            name: "Reason Subtractor",
            converter: subtractor
        }
    ],
    [
        "rsn-theecho", {
            name: "Reason The Echo",
            converter: theEcho
        }
    ],
    [
        "rsn-thor", {
            name: "Reason Thor",
            converter: thor
        }
    ],
    [
        "rsn-un16", {
            name: "Reason UN-16",
            converter: un16
        }
    ]
]);

