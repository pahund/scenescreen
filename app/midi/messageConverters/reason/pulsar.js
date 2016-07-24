/**
 * pulsar.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import fullRange from "../processors/fullRange";
import named from "../processors/named";
import button from "../processors/button";
import messages from "../messages";

const mapping = new Map([
    [
        "lfo1-rate-free", {
            name: "Pulsar LFO 1 rate (free running)",
            controller: 0x19,
            processor: fullRange
        }
    ],
    [
        "lfo1-rate-sync", {
            name: "Pulsar LFO 1 rate (sync)",
            controller: 0x1a,
            processor: named(
                "32/4", "16/4", "12/4", "8/4", "7/4", "6/4", "5/4", "4/4", "3/4", "2/4", "3/8",
                "1/4", "3/16", "1/8", "1/8t", "1/16", "1/32", "1/64"
            )
        }
    ],
    [
        "lfo1-level", {
            name: "Pulsar LFO 1 level",
            controller: 0x1b,
            processor: fullRange
        }
    ],
    [
        "lfo1-waveform", {
            name: "Pulsar LFO 1 waveform",
            controller: 0x1c,
            processor: named(
                "sine", "triangle", "square", "sawtooth", "random",
                "slope", "3steps", "4steps", "4steps-ud"
            )
        }
    ],
    [
        "kbd-follow", {
            name: "Pulsar keyboard follow",
            controller: 0x1d,
            processor: fullRange
        }
    ],
    [
        "lfo1-env-sync", {
            name: "Pulsar LFO 1 env sync",
            controller: 0x1e,
            processor: button
        }
    ],
    [
        "lfo1-tempo-sync", {
            name: "Pulsar LFO 1 tempo sync",
            controller: 0x1f,
            processor: button
        }
    ],
    [
        "lfo1-shuffle", {
            name: "Pulsar LFO 1 shuffle",
            controller: 0x21,
            processor: fullRange
        }
    ],
    [
        "lfo1-phase", {
            name: "Pulsar LFO 1 phase",
            controller: 0x22,
            processor: fullRange
        }
    ],
    [
        "lfo1-lag", {
            name: "Pulsar LFO 1 lag",
            controller: 0x23,
            processor: fullRange
        }
    ],
    [
        "lfo1-env-level-mod", {
            name: "Pulsar LFO 1 envelope level modulation",
            controller: 0x32,
            processor: fullRange
        }
    ],
    [
        "lfo1-env-rate-mod", {
            name: "Pulsar LFO 1 envelope rate modulation",
            controller: 0x33,
            processor: fullRange
        }
    ],
    [
        "lfo2-env-level-mod", {
            name: "Pulsar LFO 2 envelope level modulation",
            controller: 0x34,
            processor: fullRange
        }
    ],
    [
        "lfo2-env-rate-mod", {
            name: "Pulsar LFO 2 envelope rate modulation",
            controller: 0x35,
            processor: fullRange
        }
    ],
    [
        "env-trig", {
            name: "Pulsar envelope trig",
            controller: 0x3f,
            processor: button
        }
    ],
    [
        "env-attack", {
            name: "Pulsar envelope attack",
            controller: 0x57,
            processor: fullRange
        }
    ],
    [
        "env-release", {
            name: "Pulsar envelope release",
            controller: 0x5a,
            processor: fullRange
        }
    ],
    [
        "sync", {
            name: "Pulsar sync LFO1 < LFO2",
            controller: 0x6a,
            processor: button
        }
    ],
   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    [
        "lfo2-rate-free", {
            name: "Pulsar LFO 2 rate (free running)",
            controller: 0x6e,
            processor: fullRange
        }
    ],
    [
        "lfo2-rate-sync", {
            name: "Pulsar LFO 2 rate (sync)",
            controller: 0x6b,
            processor: named(
                "32/4", "16/4", "12/4", "8/4", "7/4", "6/4", "5/4", "4/4", "3/4", "2/4", "3/8",
                "1/4", "3/16", "1/8", "1/8t", "1/16", "1/32", "1/64"
            )
        }
    ],
    [
        "lfo2-level", {
            name: "Pulsar LFO 2 level",
            controller: 0x6f,
            processor: fullRange
        }
    ],
    [
        "lfo2-waveform", {
            name: "Pulsar LFO 2 waveform",
            controller: 0x76,
            processor: named(
                "sine", "triangle", "square", "sawtooth", "random",
                "slope", "3steps", "4steps", "4steps-ud"
            )
        }
    ],
    [
        "lfo2-tempo-sync", {
            name: "Pulsar LFO 2 tempo sync",
            controller: 0x6d,
            processor: button
        }
    ],
    [
        "lfo2-shuffle", {
            name: "Pulsar LFO 2 shuffle",
            controller: 0x70,
            processor: fullRange
        }
    ],
    [
        "lfo2-phase", {
            name: "Pulsar LFO 2 phase",
            controller: 0x6c,
            processor: fullRange
        }
    ],
    [
        "lfo2-lag", {
            name: "Pulsar LFO 2 lag",
            controller: 0x71,
            processor: fullRange
        }
    ],
    [
        "lfo2-on", {
            name: "Pulsar LFO 2 on/off",
            controller: 0x75,
            processor: button
        }
    ],
    [
        "lfo2-env-trig-on", {
            name: "Pulsar LFO 2 envelope trigger on/off",
            controller: 0x72,
            processor: button
        }
    ],
    [
        "lfo1-lfo2-rate-mod", {
            name: "Pulsar LFO 1 < LFO 2 rate modulation",
            controller: 0x73,
            processor: fullRange
        }
    ],
    [
        "lfo1-lfo2-level-mod", {
            name: "Pulsar LFO 1 < LFO 2 level modulation",
            controller: 0x74,
            processor: fullRange
        }
    ]
]);

export default messages(mapping);
