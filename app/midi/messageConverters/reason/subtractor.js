/**
 * subtractor.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
import fullRange from "../processors/fullRange";
import range from "../processors/range";
import steps from "../processors/steps";
import named from "../processors/named";
import button from "../processors/button";
import messages from "../messages";

const mapping = new Map([
    [
        "mod-wheel", {
            name: "Subtractor mod wheel",
            controller: 0x1,
            processor: fullRange
        }
    ],
    [
        "portamento", {
            name: "Subtractor portamento",
            controller: 0x5,
            processor: fullRange
        }
    ],
    [
        "master-level", {
            name: "Subtractor master level",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "amp-env-decay", {
            name: "Subtractor amp envelope decay",
            controller: 0x9,
            processor: fullRange
        }
    ],
    [
        "amp-env-sustain", {
            name: "Subtractor amp envelope sustain",
            controller: 0xc,
            processor: fullRange
        }
    ],
    [
        "filter-env-attack", {
            name: "Subtractor filter envelope attack",
            controller: 0xe,
            processor: fullRange
        }
    ],
    [
        "filter-env-decay", {
            name: "Subtractor filter envelope decay",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "filter-env-sustain", {
            name: "Subtractor filter envelope sustain",
            controller: 0x10,
            processor: fullRange
        }
    ],
    [
        "filter-env-release", {
            name: "Subtractor filter envelope release",
            controller: 0x11,
            processor: fullRange
        }
    ],
    [
        "filter-env-amount", {
            name: "Subtractor filter envelope amount",
            controller: 0x12,
            processor: fullRange
        }
    ],
    [
        "filter-env-invert", {
            name: "Subtractor filter envelope invert",
            controller: 0x13,
            processor: button
        }
    ],
    [
        "osc1-wave", {
            name: "Subtractor oscillator 1 waveform",
            controller: 0x14,
            processor: named(
                "saw", "square", "triangle", "sine", 5, 6, 7, 8, 9, 10, 11,
                12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                24, 25, 26, 27, 28, 29, 30, 31, 32
            )
        }
    ],
    [
        "osc1-oct", {
            name: "Subtractor oscillator 1 octave",
            controller: 0x15,
            processor: steps(0, 9)
        }
    ],
    [
        "osc1-semi", {
            name: "Subtractor oscillator 1 semitones",
            controller: 0x16,
            processor: steps(0, 12)
        }
    ],
    [
        "osc1-cent", {
            name: "Subtractor oscillator 1 fine tune (cents)",
            controller: 0x17,
            processor: range(-50, 50)
        }
    ],
    [
        "osc1-kbd-track", {
            name: "Subtractor oscillator 1 keyboard tracking",
            controller: 0x19,
            processor: button
        }
    ],
    [
        "lfo1-rate", {
            name: "Subtractor LFO 1 rate",
            controller: 0x1a,
            processor: fullRange
        }
    ],
    [
        "lfo1-amount", {
            name: "Subtractor LFO 1 amount",
            controller: 0x1b,
            processor: fullRange
        }
    ],
    [
        "lfo1-wave", {
            name: "Subtractor LFO 1 waveform",
            controller: 0x1c,
            processor: named("triangle", "ramp", "saw", "square", "random1", "random2")
        }
    ],
    [
        "lfo1-dest", {
            name: "Subtractor LFO 1 destination",
            controller: 0x1d,
            processor: named("osc12", "osc2", "ffreq", "fm", "phase", "mix")
        }
    ],
    [
        "lfo1-sync", {
            name: "Subtractor LFO 1 sync on/off",
            controller: 0x1e,
            processor: button
        }
    ],
    [
        "filter-freq-mod-wheel", {
            name: "Subtractor filter frequency mod wheel amount",
            controller: 0x21,
            processor: range(-64, 63)
        }
    ],
    [
        "filter-res-mod-wheel", {
            name: "Subtractor filter resonance mod wheel amount",
            controller: 0x22,
            processor: range(-64, 63)
        }
    ],
    [
        "lfo1-mod-wheel", {
            name: "Subtractor LFO 1 mod wheel amount",
            controller: 0x23,
            processor: range(-64, 63)
        }
    ],
    [
        "fm-mod-wheel", {
            name: "Subtractor FM mod wheel amount",
            controller: 0x24,
            processor: range(-64, 63)
        }
    ],
    [
        "phase-mod-wheel", {
            name: "Subtractor phase mod wheel amount",
            controller: 0x25,
            processor: range(-64, 63)
        }
    ],
    [
        "pitch-bend-range", {
            name: "Subtractor pitch bend range",
            controller: 0x27,
            processor: range(0, 24)
        }
    ],
    [
        "filter-freq-ext-mod", {
            name: "Subtractor filter frequency external modulation amount",
            controller: 0x28,
            processor: range(-64, 63)
        }
    ],
    [
        "lfo1-ext-mod", {
            name: "Subtractor LFO 1 external modulation amount",
            controller: 0x29,
            processor: range(-64, 63)
        }
    ],
    [
        "amp-ext-mod", {
            name: "Subtractor amplitude external modulation amount",
            controller: 0x2a,
            processor: range(-64, 63)
        }
    ],
    [
        "fm-ext-mod", {
            name: "Subtractor FM external modulation amount",
            controller: 0x2c,
            processor: range(-64, 63)
        }
    ],
    [
        "ext-mod-select", {
            name: "Subtractor external modulation select",
            controller: 0x2b,
            processor: named("aftertouch", "expression", "breath")
        }
    ],
    [
        "amp-vel", {
            name: "Subtractor amplitude velocity amount",
            controller: 0x2d,
            processor: range(-64, 63)
        }
    ],
    [
        "filter-env-vel", {
            name: "Subtractor filter envelope velocity amount",
            controller: 0x2e,
            processor: range(-64, 63)
        }
    ],
    [
        "filter-decay-vel", {
            name: "Subtractor filter envelope decay velocity amount",
            controller: 0x2f,
            processor: range(-64, 63)
        }
    ],
    [
        "amp-attack-vel", {
            name: "Subtractor amplitude envelope attack velocity amount",
            controller: 0x30,
            processor: range(-64, 63)
        }
    ],
    [
        "fm-vel", {
            name: "Subtractor FM velocity amount",
            controller: 0x31,
            processor: range(-64, 63)
        }
    ],
    [
        "mod-env-vel", {
            name: "Subtractor modulation envelope velocity amount",
            controller: 0x32,
            processor: range(-64, 63)
        }
    ],
    [
        "phase-vel", {
            name: "Subtractor phase velocity amount",
            controller: 0x33,
            processor: range(-64, 63)
        }
    ],
    [
        "filter2-freq-vel", {
            name: "Subtractor filter 2 frequency velocity amount",
            controller: 0x34,
            processor: range(-64, 63)
        }
    ],
    [
        "mix-vel", {
            name: "Subtractor mix velocity amount",
            controller: 0x35,
            processor: range(-64, 63)
        }
    ],
    [
        "key-mode", {
            name: "Subtractor keyboard mode",
            controller: 0x44,
            processor: named("legato", "retrig")
        }
    ],
    [
        "filter-res", {
            name: "Subtractor filter resonance",
            controller: 0x47,
            processor: fullRange
        }
    ],
    [
        "amp-env-release", {
            name: "Subtractor amplitude envelope release",
            controller: 0x48,
            processor: fullRange
        }
    ],
    [
        "amp-env-attack", {
            name: "Subtractor amplitude envelope attack",
            controller: 0x49,
            processor: fullRange
        }
    ],
    [
        "filter-freq", {
            name: "Subtractor filter frequency",
            controller: 0x4a,
            processor: fullRange
        }
    ],
    [
        "filter2-on", {
            name: "Subtractor filter 2 on/off",
            controller: 0x4b,
            processor: button
        }
    ],
    [
        "filter-type", {
            name: "Subtractor filter type",
            controller: 0x4c,
            processor: named("notch", "hp12", "bp12", "lp12", "lp24")
        }
    ],
    [
        "filter-kbd-track", {
            name: "Subtractor filter keyboard tracking",
            controller: 0x4d,
            processor: fullRange
        }
    ],
    [
        "filter2-res", {
            name: "Subtractor filter 2 resonance",
            controller: 0x4e,
            processor: fullRange
        }
    ],
    [
        "filter2-freq", {
            name: "Subtractor filter 2 frequency",
            controller: 0x4f,
            processor: fullRange
        }
    ],
    [
        "filter-link-on", {
            name: "Subtractor filter link frequencies on/off",
            controller: 0x50,
            processor: button
        }
    ],
    [
        "noise-on", {
            name: "Subtractor noise on/off",
            controller: 0x51,
            processor: button
        }
    ],
    [
        "noise-level", {
            name: "Subtractor level",
            controller: 0x52,
            processor: fullRange
        }
    ],
    [
        "noise-decay", {
            name: "Subtractor noise decay",
            controller: 0x53,
            processor: fullRange
        }
    ],
    [
        "noise-color", {
            name: "Subtractor noise color",
            controller: 0x54,
            processor: fullRange
        }
    ],
    [
        "mod-env-amt", {
            name: "Subtractor modulation envelope amount",
            controller: 0x55,
            processor: fullRange
        }
    ],
    [
        "mod-env-invert", {
            name: "Subtractor modulation envelope invert",
            controller: 0x56,
            processor: button
        }
    ],
    [
        "mod-env-attack", {
            name: "Subtractor modulation envelope attack",
            controller: 0x57,
            processor: fullRange
        }
    ],
    [
        "mod-env-decay", {
            name: "Subtractor modulation envelope decay",
            controller: 0x58,
            processor: fullRange
        }
    ],
    [
        "mod-env-sustain", {
            name: "Subtractor modulation envelope sustain",
            controller: 0x59,
            processor: fullRange
        }
    ],
    [
        "mod-env-release", {
            name: "Subtractor modulation envelope release",
            controller: 0x5a,
            processor: fullRange
        }
    ],
    [
        "mod-env-dest", {
            name: "Subtractor modulation envelope destination",
            controller: 0x5b,
            processor: named("osc1", "osc2", "mix", "fm", "phase", "freq2")
        }
    ],
    [
        "osc1-phase-mode", {
            name: "Subtractor oscillator 1 phase mode",
            controller: 0x5c,
            processor: named("x", "-", "o")
        }
    ],
    [
        "osc1-phase-diff", {
            name: "Subtractor oscillator 1 phase difference",
            controller: 0x5d,
            processor: fullRange
        }
    ],
    [
        "osc2-on", {
            name: "Subtractor oscillator 2 on/off",
            controller: 0x5e,
            processor: button
        }
    ],
    [
        "osc2-wave", {
            name: "Subtractor oscillator 2 waveform",
            controller: 0x5f,
            processor: named(
                "saw", "square", "triangle", "sine", 5, 6, 7, 8, 9, 10, 11,
                12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                24, 25, 26, 27, 28, 29, 30, 31, 32
            )
        }
    ],
    [
        "osc2-oct", {
            name: "Subtractor oscillator 2 octave",
            controller: 0x66,
            processor: steps(0, 9)
        }
    ],
    [
        "osc2-semi", {
            name: "Subtractor oscillator 2 semitones",
            controller: 0x67,
            processor: steps(0, 12)
        }
    ],
    [
        "osc2-cent", {
            name: "Subtractor oscillator 2 fine tune (cents)",
            controller: 0x68,
            processor: range(-50, 50)
        }
    ],
    [
        "osc2-phase-mode", {
            name: "Subtractor oscillator 2 phase mode",
            controller: 0x69,
            processor: named("x", "-", "o")
        }
    ],
    [
        "osc2-phase-diff", {
            name: "Subtractor oscillator 2 phase difference",
            controller: 0x6a,
            processor: fullRange
        }
    ],
    [
        "osc-mix", {
            name: "Subtractor oscillator mix",
            controller: 0x6b,
            processor: fullRange
        }
    ],
    [
        "fm", {
            name: "Subtractor FM amount",
            controller: 0x6c,
            processor: fullRange
        }
    ],
    [
        "ring-mod", {
            name: "Subtractor ring modulation on/off",
            controller: 0x6d,
            processor: button
        }
    ],
    [
        "lfo2-rate", {
            name: "Subtractor LFO 2 rate",
            controller: 0x6e,
            processor: fullRange
        }
    ],
    [
        "lfo2-amount", {
            name: "Subtractor LFO 2 amount",
            controller: 0x6f,
            processor: fullRange
        }
    ],
    [
        "lfo2-delay", {
            name: "Subtractor LFO 2 delay",
            controller: 0x70,
            processor: fullRange
        }
    ],
    [
        "lfo2-dest", {
            name: "Subtractor LFO 2 destination",
            controller: 0x71,
            processor: named("osc12", "phase", "ffreq2", "amp")
        }
    ],
    [
        "lfo2-kbd-track", {
            name: "Subtractor LFO 2 keyboard tracking",
            controller: 0x72,
            processor: fullRange
        }
    ],
    [
        "osc2-kbd-track", {
            name: "Subtractor oscillator 2 keyboard tracking",
            controller: 0x73,
            processor: button
        }
    ]
]);

export default messages(mapping);
