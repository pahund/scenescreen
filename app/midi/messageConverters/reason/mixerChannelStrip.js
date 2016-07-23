/**
 * mixerChannelStrip.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 22 Jul 2016
 */
import fullRange from "../processors/fullRange";
import button from "../processors/button";
import messages from "../messages";

const mapping = new Map([
    [
        "level", {
            name: "mixer channel strip level",
            controller: 0x7,
            processor: fullRange
        }
    ],
    [
        "width", {
            name: "mixer channel strip width",
            controller: 0x8,
            processor: fullRange
        }
    ],
    [
        "pan", {
            name: "mixer channel strip pan",
            controller: 0xa,
            processor: fullRange
        }
    ],
    [
        "mute", {
            name: "mixer channel strip mute",
            controller: 0xc,
            processor: button
        }
    ],
    [
        "solo", {
            name: "mixer channel strip solo",
            controller: 0xd,
            processor: button
        }
    ],
    [
        "send-fx1-on", {
            name: "mixer channel strip send FX 1 on",
            controller: 0xe,
            processor: button
        }
    ],
    [
        "send-fx1-level", {
            name: "mixer channel strip send FX 1 level",
            controller: 0xf,
            processor: fullRange
        }
    ],
    [
        "send-fx1-pre-fader", {
            name: "mixer channel strip send FX 1 pre fader",
            controller: 0x10,
            processor: button
        }
    ],
    [
        "send-fx2-on", {
            name: "mixer channel strip send FX 2 on",
            controller: 0x11,
            processor: button
        }
    ],
    [
        "send-fx2-level", {
            name: "mixer channel strip send FX 2 level",
            controller: 0x12,
            processor: fullRange
        }
    ],
    [
        "send-fx2-pre-fader", {
            name: "mixer channel strip send FX 2 pre fader",
            controller: 0x13,
            processor: button
        }
    ],
    [
        "send-fx3-on", {
            name: "mixer channel strip send FX 3 on",
            controller: 0x14,
            processor: button
        }
    ],
    [
        "send-fx3-level", {
            name: "mixer channel strip send FX 3 level",
            controller: 0x15,
            processor: fullRange
        }
    ],
    [
        "send-fx3-pre-fader", {
            name: "mixer channel strip send FX 3 pre fader",
            controller: 0x16,
            processor: button
        }
    ],
    [
        "send-fx4-on", {
            name: "mixer channel strip send FX 4 on",
            controller: 0x17,
            processor: button
        }
    ],
    [
        "send-fx4-level", {
            name: "mixer channel strip send FX 4 level",
            controller: 0x18,
            processor: fullRange
        }
    ],
    [
        "send-fx4-pre-fader", {
            name: "mixer channel strip send FX 4 pre fader",
            controller: 0x19,
            processor: button
        }
    ],
    [
        "send-fx5-on", {
            name: "mixer channel strip send FX 5 on",
            controller: 0x1a,
            processor: button
        }
    ],
    [
        "send-fx5-level", {
            name: "mixer channel strip send FX 5 level",
            controller: 0x1b,
            processor: fullRange
        }
    ],
    [
        "send-fx5-pre-fader", {
            name: "mixer channel strip send FX 5 pre fader",
            controller: 0x1c,
            processor: button
        }
    ],
    [
        "send-fx6-on", {
            name: "mixer channel strip send FX 6 on",
            controller: 0x1d,
            processor: button
        }
    ],
    [
        "send-fx6-level", {
            name: "mixer channel strip send FX 6 level",
            controller: 0x1e,
            processor: fullRange
        }
    ],
    [
        "send-fx6-pre-fader", {
            name: "mixer channel strip send FX 6 pre fader",
            controller: 0x1f,
            processor: button
        }
    ],
    [
        "send-fx7-on", {
            name: "mixer channel strip send FX 7 on",
            controller: 0x27,
            processor: button
        }
    ],
    [
        "send-fx7-level", {
            name: "mixer channel strip send FX 7 level",
            controller: 0x28,
            processor: fullRange
        }
    ],
    [
        "send-fx7-pre-fader", {
            name: "mixer channel strip send FX 7 pre fader",
            controller: 0x29,
            processor: button
        }
    ],
    [
        "send-fx8-on", {
            name: "mixer channel strip send FX 8 on",
            controller: 0x2a,
            processor: button
        }
    ],
    [
        "send-fx8-level", {
            name: "mixer channel strip send FX 8 level",
            controller: 0x2b,
            processor: fullRange
        }
    ],
    [
        "send-fx8-pre-fader", {
            name: "mixer channel strip send FX 8 pre fader",
            controller: 0x2c,
            processor: button
        }
    ],
    [
        "compressor-on", {
            name: "mixer channel strip compressor on",
            controller: 0x2e,
            processor: button
        }
    ],
    [
        "compressor-threshold", {
            name: "mixer channel strip compressor threshold",
            controller: 0x2f,
            processor: fullRange
        }
    ],
    [
        "compressor-release", {
            name: "mixer channel strip compressor release",
            controller: 0x30,
            processor: fullRange
        }
    ],
    [
        "compressor-ratio", {
            name: "mixer channel strip compressor ratio",
            controller: 0x31,
            processor: fullRange
        }
    ],
    [
        "compressor-peak", {
            name: "mixer channel strip compressor peak",
            controller: 0x32,
            processor: button
        }
    ],
    [
        "compressor-fast-attack", {
            name: "mixer channel strip compressor fast attack",
            controller: 0x33,
            processor: button
        }
    ],
    [
        "gate-on", {
            name: "mixer channel strip gate on",
            controller: 0x35,
            processor: button
        }
    ],
    [
        "gate-threshold", {
            name: "mixer channel strip gate threshold",
            controller: 0x36,
            processor: fullRange
        }
    ],
    [
        "gate-hold", {
            name: "mixer channel strip gate hold",
            controller: 0x37,
            processor: fullRange
        }
    ],
    [
        "gate-release", {
            name: "mixer channel strip gate release",
            controller: 0x38,
            processor: fullRange
        }
    ],
    [
        "gate-range", {
            name: "mixer channel strip gate range",
            controller: 0x39,
            processor: fullRange
        }
    ],
    [
        "gate-fast-attack", {
            name: "mixer channel strip gate fast attack",
            controller: 0x3a,
            processor: button
        }
    ],
    [
        "gate-exp", {
            name: "mixer channel strip gate exp",
            controller: 0x3b,
            processor: button
        }
    ],
    [
        "gate-key", {
            name: "mixer channel strip gate key",
            controller: 0x3d,
            processor: button
        }
    ],
    [
        "hf-bell", {
            name: "mixer channel strip HF bell",
            controller: 0x54,
            processor: button
        }
    ],
    [
        "insert-fx-bypass", {
            name: "mixer channel strip insert FX bypass",
            controller: 0x44,
            processor: button
        }
    ],
    [
        "insert-fx-rotary1", {
            name: "mixer channel strip insert FX rotary 1",
            controller: 0x47,
            processor: fullRange
        }
    ],
    [
        "insert-fx-rotary2", {
            name: "mixer channel strip insert FX rotary 2",
            controller: 0x48,
            processor: fullRange
        }
    ],
    [
        "insert-fx-rotary3", {
            name: "mixer channel strip insert FX rotary 3",
            controller: 0x49,
            processor: fullRange
        }
    ],
    [
        "insert-fx-rotary4", {
            name: "mixer channel strip insert FX rotary 4",
            controller: 0x4a,
            processor: fullRange
        }
    ],
    [
        "insert-fx-button1", {
            name: "mixer channel strip insert FX button 1",
            controller: 0x4b,
            processor: button
        }
    ],
    [
        "insert-fx-button2", {
            name: "mixer channel strip insert FX button 2",
            controller: 0x4c,
            processor: button
        }
    ],
    [
        "insert-fx-button3", {
            name: "mixer channel strip insert FX button 3",
            controller: 0x4d,
            processor: button
        }
    ],
    [
        "insert-fx-button4", {
            name: "mixer channel strip insert FX button 4",
            controller: 0x4e,
            processor: button
        }
    ],
    [
        "eq-on", {
            name: "mixer channel strip EQ on",
            controller: 0x50,
            processor: button
        }
    ],
    [
        "eq-e-mode", {
            name: "mixer channel strip EQ e-mode",
            controller: 0x51,
            processor: button
        }
    ],
    [
        "hf-gain", {
            name: "mixer channel strip HF gain",
            controller: 0x52,
            processor: fullRange
        }
    ],
    [
        "hf-frequency", {
            name: "mixer channel strip HF frequency",
            controller: 0x53,
            processor: fullRange
        }
    ],
    [
        "hmf-gain", {
            name: "mixer channel strip HMF gain",
            controller: 0x55,
            processor: fullRange
        }
    ],
    [
        "hmf-frequency", {
            name: "mixer channel strip HMF frequency",
            controller: 0x56,
            processor: fullRange
        }
    ],
    [
        "hmf-q", {
            name: "mixer channel strip HMF Q",
            controller: 0x57,
            processor: fullRange
        }
    ],
    [
        "lmf-gain", {
            name: "mixer channel strip LMF gain",
            controller: 0x58,
            processor: fullRange
        }
    ],
    [
        "lmf-frequency", {
            name: "mixer channel strip LMF frequency",
            controller: 0x59,
            processor: fullRange
        }
    ],
    [
        "lmf-q", {
            name: "mixer channel strip LMF Q",
            controller: 0x5a,
            processor: fullRange
        }
    ],
    [
        "lf-gain", {
            name: "mixer channel strip LF gain",
            controller: 0x5b,
            processor: fullRange
        }
    ],
    [
        "lf-frequency", {
            name: "mixer channel strip LF frequency",
            controller: 0x5c,
            processor: fullRange
        }
    ],
    [
        "lf-bell", {
            name: "mixer channel strip LF bell",
            controller: 0x5d,
            processor: button
        }
    ],
    [
        "lpf-on", {
            name: "mixer channel strip LPF on",
            controller: 0x66,
            processor: button
        }
    ],
    [
        "lpf-frequency", {
            name: "mixer channel strip LPF frequency",
            controller: 0x67,
            processor: fullRange
        }
    ],
    [
        "hpf-on", {
            name: "mixer channel strip HPF on",
            controller: 0x68,
            processor: button
        }
    ],
    [
        "hpf-frequency", {
            name: "mixer channel strip HPF frequency",
            controller: 0x69,
            processor: fullRange
        }
    ],
    [
        "gain", {
            name: "mixer channel strip gain",
            controller: 0x6b,
            processor: fullRange
        }
    ],
    [
        "invert-phase", {
            name: "mixer channel strip invert phase",
            controller: 0x6c,
            processor: button
        }
    ]
]);

export default messages(mapping);
