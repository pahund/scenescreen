/**
 * theEcho.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import range from "../processors/range";
import enabled from "../processors/enabled";
import button from "../processors/button";
import named from "../processors/named";
import fullRangeNamed from "../processors/fullRangeNamed";
import multi from "../processors/multi";
import messages from "../messages";

const mapping = new Map([
    [
        "enabled", {
            name: "The Echo enabled",
            controller: 0x9,
            processor: enabled
        }
    ],
    [
        "roll", {
            name: "The Echo roll enabled",
            controller: 0x1,
            processor: range(0, 100)
        }
    ],
    [
        "input-mode", {
            name: "The Echo input mode",
            controller: 0x3,
            processor: named("normal", "triggered", "roll")
        }
    ],
    [
        "dry-wet", {
            name: "The Echo dry/wet",
            controller: 0x7,
            processor: range(0, 100)
        }
    ],
    [
        "trig", {
            name: "The Echo trigger",
            controller: 0x4,
            processor: button
        }
    ],
    [
        "ducking", {
            name: "The Echo ducking",
            controller: 0x8,
            processor: range(0, 100)
        }
    ],
    [
        "delay-time", {
            name: "The Echo delay time",
            controller: 0xc,
            processor: multi(
                fullRangeNamed(
                    "1/128", "1/64", "1/32", "1/16t",
                    "1/16", "1/8t", "3/32", "1/8",
                    "2/8t", "3/16", "1/4", "5/16",
                    "4/8t", "3/8", "7/16", "1/2"
                ),
                range(1, 1000)
            )
        }
    ],
    [
        "feedback", {
            name: "The Echo delay feedback",
            controller: 0xd,
            processor: range(0, 139)
        }
    ],
    [
        "keep-pitch", {
            name: "The Echo keep pitch on/off",
            controller: 0xe,
            processor: button
        }
    ],
    [
        "sync", {
            name: "The Echo sync on/off",
            controller: 0xf,
            processor: button
        }
    ],
    [
        "rch-time-offset", {
            name: "The Echo right channel time offset",
            controller: 0x10,
            processor: multi(
                fullRangeNamed(
                    0, "1/64", "1/32", "1/16t",
                    "1/16", "1/8t", "3/32", "1/8",
                    "2/8t", "3/16", "1/4", "5/16",
                    "4/8t", "3/8", "7/16", "1/2"
                ),
                range(1, 1000)
            )
        }
    ],
    [
        "rch-feedback-offset", {
            name: "The Echo right channel feedback offset",
            controller: 0x13,
            processor: range(-100, 100)
        }
    ],
    [
        "ping-pong-on", {
            name: "The Echo ping pong mode on/off",
            controller: 0x11,
            processor: button
        }
    ],
    [
        "ping-pong-pan", {
            name: "The Echo ping pong pan",
            controller: 0x12,
            processor: range(-100, 100)
        }
    ],
    [
        "diffusion-on", {
            name: "The Echo diffusion on/off",
            controller: 0x14,
            processor: button
        }
    ],
    [
        "diffusion-spread", {
            name: "The Echo diffusion spread",
            controller: 0x15,
            processor: range(0, 100)
        }
    ],
    [
        "diffusion-amount", {
            name: "The Echo diffusion amount",
            controller: 0x16,
            processor: range(0, 100)
        }
    ],
    [
        "drive-amount", {
            name: "The Echo drive amount",
            controller: 0x17,
            processor: range(0, 100)
        }
    ],
    [
        "drive-type", {
            name: "The Echo drive type",
            controller: 0x18,
            processor: named("tube", "dist", "ovdr", "lim")
        }
    ],
    [
        "filter-on", {
            name: "The Echo filter on/off",
            controller: 0x19,
            processor: button
        }
    ],
    [
        "filter-freq", {
            name: "The Echo filter frequency",
            controller: 0x1a,
            processor: range(0, 100)
        }
    ],
    [
        "filter-res", {
            name: "The Echo filter resonance",
            controller: 0x1b,
            processor: range(0, 100)
        }
    ],
    [
        "env", {
            name: "The Echo envelope",
            controller: 0x27,
            processor: range(-100, 100)
        }
    ],
    [
        "wobble", {
            name: "The Echo wobble",
            controller: 0x28,
            processor: range(0, 100)
        }
    ],
    [
        "lfo-rate", {
            name: "The Echo LFO rate",
            controller: 0x29,
            processor: range(0, 100)
        }
    ],
    [
        "lfo-amount", {
            name: "The Echo LFO amount",
            controller: 0x2a,
            processor: range(0, 100)
        }
    ]
]);

export default messages(mapping);
