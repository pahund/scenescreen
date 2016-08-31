/**
 * alligator.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import enabled from "../processors/enabled";
import range from "../processors/range";
import steps from "../processors/steps";
import messages from "../messages";
import button from "../processors/button";
import named from "../processors/named";
import multi from "../processors/multi";
import fullRange from "../processors/fullRange";
import fullRangeNamed from "../processors/fullRangeNamed";

const mapping = new Map([
    [
        "enabled", {
            name: "Alligator enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "master-volume", {
            name: "Alligator master volume",
            controller: 0x7,
            processor: range(0, 100)
        }
    ],
    [
        "hi-pass-pan", {
            name: "Alligator high pass pan",
            controller: 0xc,
            processor: range(-100, 100)
        }
    ],
    [
        "hi-pass-volume", {
            name: "Alligator high pass volume",
            controller: 0xd,
            processor: range(0, 100)
        }
    ],
    [
        "band-pass-pan", {
            name: "Alligator band pass pan",
            controller: 0xe,
            processor: range(-100, 100)
        }
    ],
    [
        "band-pass-volume", {
            name: "Alligator band pass volume",
            controller: 0xf,
            processor: range(0, 100)
        }
    ],
    [
        "lo-pass-pan", {
            name: "Alligator low pass pan",
            controller: 0x10,
            processor: range(-100, 100)
        }
    ],
    [
        "lo-pass-volume", {
            name: "Alligator low pass volume",
            controller: 0x11,
            processor: range(0, 100)
        }
    ],
    [
        "dry-ducking", {
            name: "Alligator dry ducking",
            controller: 0x12,
            processor: range(0, 100)
        }
    ],
    [
        "dry-pan", {
            name: "Alligator dry pan",
            controller: 0x13,
            processor: range(-100, 100)
        }
    ],
    [
        "dry-volume", {
            name: "Alligator dry volume",
            controller: 0x14,
            processor: range(0, 100)
        }
    ],
    [
        "pattern-on", {
            name: "Alligator pattern on/off",
            controller: 0x27,
            processor: button
        }
    ],
    [
        "pattern", {
            name: "Alligator pattern",
            controller: 0x28,
            processor: steps(0, 63)
        }
    ],
    [
        "resolution", {
            name: "Alligator resolution",
            controller: 0x29,
            processor: named("1/8", "1/8t", "1/16", "1/16t", "1/32")
        }
    ],
    [
        "shift", {
            name: "Alligator shift",
            controller: 0x2a,
            processor: range(-16, 16, 32)
        }
    ],
    [
        "shuffle", {
            name: "Alligator shuffle on/off",
            controller: 0x2b,
            processor: button
        }
    ],
    [
        "gate1-trig", {
            name: "Alligator gate 1 trigger",
            controller: 0x2c,
            processor: button
        }
    ],
    [
        "gate1-open", {
            name: "Alligator gate 1 open",
            controller: 0x2d,
            processor: button
        }
    ],
    [
        "gate2-trig", {
            name: "Alligator gate 2 trigger",
            controller: 0x2e,
            processor: button
        }
    ],
    [
        "gate2-open", {
            name: "Alligator gate 2 open",
            controller: 0x2f,
            processor: button
        }
    ],
    [
        "gate3-trig", {
            name: "Alligator gate 3 trigger",
            controller: 0x30,
            processor: button
        }
    ],
    [
        "gate3-open", {
            name: "Alligator gate 3 open",
            controller: 0x31,
            processor: button
        }
    ],
    [
        "amp-env-attack", {
            name: "Alligator amplitude envelope attack",
            controller: 0x32,
            processor: range(0, 100)
        }
    ],
    [
        "amp-env-decay", {
            name: "Alligator amplitude envelope decay",
            controller: 0x33,
            processor: range(0, 100)
        }
    ],
    [
        "amp-env-release", {
            name: "Alligator amplitude envelope release",
            controller: 0x34,
            processor: range(0, 100)
        }
    ],
    [
        "filter-env-attack", {
            name: "Alligator filter envelope attack",
            controller: 0x35,
            processor: range(0, 100)
        }
    ],
    [
        "filter-env-decay", {
            name: "Alligator filter envelope decay",
            controller: 0x36,
            processor: range(0, 100)
        }
    ],
    [
        "filter-env-release", {
            name: "Alligator filter envelope release",
            controller: 0x37,
            processor: range(0, 100)
        }
    ],
    [
        "lfo-freq", {
            name: "Alligator LFO frequency",
            controller: 0x38,
            processor: multi(
                fullRangeNamed(
                    "16/4", "12/4", "8/4", "7/4",
                    "6/4", "5/4", "4/4", "3/4",
                    "2/4", "3/8", "1/4", "3/16",
                    "1/8", "1/8t", "1/16", "1/32"
                ),
                fullRange
            )
        }
    ],
    [
        "lfo-wave", {
            name: "Alligator LFO waveform",
            controller: 0x39,
            processor: named(
                "sine", "triangle", "square", "sawtooth",
                "random", "decay", "3steps", "4steps",
                "4steps-ud"
            )
        }
    ],
    [
        "hi-pass-on", {
            name: "Alligator high pass on/off",
            controller: 0x41,
            processor: button
        }
    ],
    [
        "hi-pass-lfo", {
            name: "Alligator high pass LFO amount",
            controller: 0x42,
            processor: range(-100, 100)
        }
    ],
    [
        "hi-pass-freq", {
            name: "Alligator high pass filter frequency",
            controller: 0x43,
            processor: fullRange
        }
    ],
    [
        "hi-pass-res", {
            name: "Alligator high pass filter resonance",
            controller: 0x44,
            processor: range(0, 100)
        }
    ],
    [
        "hi-pass-env", {
            name: "Alligator high pass filter envelope amount",
            controller: 0x45,
            processor: range(-100, 100)
        }
    ],
    [
        "band-pass-on", {
            name: "Alligator band pass on/off",
            controller: 0x46,
            processor: button
        }
    ],
    [
        "band-pass-lfo", {
            name: "Alligator band pass LFO amount",
            controller: 0x47,
            processor: range(-100, 100)
        }
    ],
    [
        "band-pass-freq", {
            name: "Alligator band pass filter frequency",
            controller: 0x48,
            processor: fullRange
        }
    ],
    [
        "band-pass-res", {
            name: "Alligator band pass filter resonance",
            controller: 0x49,
            processor: range(0, 100)
        }
    ],
    [
        "band-pass-env", {
            name: "Alligator band pass filter envelope amount",
            controller: 0x4a,
            processor: range(-100, 100)
        }
    ],
    [
        "lo-pass-on", {
            name: "Alligator low pass on/off",
            controller: 0x4b,
            processor: button
        }
    ],
    [
        "lo-pass-lfo", {
            name: "Alligator low pass LFO amount",
            controller: 0x4c,
            processor: range(-100, 100)
        }
    ],
    [
        "lo-pass-freq", {
            name: "Alligator low pass filter frequency",
            controller: 0x4d,
            processor: fullRange
        }
    ],
    [
        "lo-pass-res", {
            name: "Alligator low pass filter resonance",
            controller: 0x4e,
            processor: range(0, 100)
        }
    ],
    [
        "lo-pass-env", {
            name: "Alligator low pass filter envelope amount",
            controller: 0x4f,
            processor: range(-100, 100)
        }
    ],
    [
        "hi-pass-drive", {
            name: "Alligator high pass drive amount",
            controller: 0x50,
            processor: range(0, 100)
        }
    ],
    [
        "hi-pass-phaser", {
            name: "Alligator high pass phaser amount",
            controller: 0x51,
            processor: range(0, 100)
        }
    ],
    [
        "hi-pass-delay", {
            name: "Alligator high pass delay amount",
            controller: 0x52,
            processor: range(0, 100)
        }
    ],
    [
        "band-pass-drive", {
            name: "Alligator band pass drive amount",
            controller: 0x53,
            processor: range(0, 100)
        }
    ],
    [
        "band-pass-phaser", {
            name: "Alligator band pass phaser amount",
            controller: 0x54,
            processor: range(0, 100)
        }
    ],
    [
        "band-pass-delay", {
            name: "Alligator band pass delay amount",
            controller: 0x55,
            processor: range(0, 100)
        }
    ],
    [
        "lo-pass-drive", {
            name: "Alligator low pass drive amount",
            controller: 0x56,
            processor: range(0, 100)
        }
    ],
    [
        "lo-pass-phaser", {
            name: "Alligator low pass phaser amount",
            controller: 0x57,
            processor: range(0, 100)
        }
    ],
    [
        "lo-pass-delay", {
            name: "Alligator low pass delay amount",
            controller: 0x58,
            processor: range(0, 100)
        }
    ],
    [
        "delay-time", {
            name: "Alligator delay time",
            controller: 0x59,
            processor: multi(
                fullRangeNamed(
                    "1/16", "1/8t", "1/8", "2/8t",
                    "3/16", "1/4", "5/16", "4/8t",
                    "3/8", "7/16", "1/2"

                ),
                range(0, 1000)
            )
        }
    ],
    [
        "delay-feedback", {
            name: "Alligator delay feedback",
            controller: 0x5a,
            processor: range(0, 100)
        }
    ],
    [
        "delay-sync", {
            name: "Alligator delay sync on/off",
            controller: 0x5b,
            processor: button
        }
    ],
    [
        "delay-pan", {
            name: "Alligator delay pan",
            controller: 0x5c,
            processor: range(-100, 100)
        }
    ],
    [
        "phaser-rate", {
            name: "Alligator phaser rate",
            controller: 0x5d,
            processor: range(0, 100)
        }
    ],
    [
        "phaser-feedback", {
            name: "Alligator phaser feedback",
            controller: 0x5e,
            processor: range(0, 100)
        }
    ]
]);

export default messages(mapping);
