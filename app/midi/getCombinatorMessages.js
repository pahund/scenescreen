/**
 * getCombinatorMessages.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import controllerMessage from "./controllerMessage";

const MOD_WHEEL = 0x1;
const ENABLED = 0x9;
const ROTARY_1 = 0x47;
const ROTARY_2 = 0x48;
const ROTARY_3 = 0x49;
const ROTARY_4 = 0x4a;
const BUTTON_1 = 0x4b;
const BUTTON_2 = 0x4c;
const BUTTON_3 = 0x4d;
const BUTTON_4 = 0x4e;

const BUTTON_ON = 1;
const BUTTON_OFF = 0;
const ENABLED_BYPASS = 2;
const ENABLED_ON = 1;
const ENABLED_OFF = 0;

function validateButton(button) {
    if (button !== "on" && button !== "off") {
        throw new Error(
            `“${button}” is not valid for a Combinator button. ` +
            "Valid are: “on” or “off”"
        );
    }
}

function validateEnabled(enabled) {
    if (enabled !== "on" && enabled !== "off" && enabled !== "bypass") {
        throw new Error(
            `“${enabled}” is not valid for a Combinator enabled switch. ` +
            "Valid are: “on”, “off” or “bypass”"
        );
    }
}

function validateRotary(rotary) {
    if (typeof rotary !== "number") {
        throw new Error(
            `“${rotary}” is not valid for a Combinator rotary, ` +
            "it must be a number"
        );
    }
    if (rotary < 0 || rotary > 127) {
        throw new Error(
            `${rotary} is not valid for a Combinator rotary, ` +
            "it must be a number from 0 to 127"
        );
    }
}

function validateModWheel(modWheel) {
    if (typeof modWheel !== "number") {
        throw new Error(
            `“${modWheel}” is not valid for a Combinator modulation wheel, ` +
            "it must be a number"
        );
    }
    if (modWheel < 0 || modWheel > 127) {
        throw new Error(
            `${modWheel} is not valid for a Combinator modulation wheel, ` +
            "it must be a number from 0 to 127"
        );
    }
}

export default (channelNumber, {
    rotary1, rotary2, rotary3, rotary4, button1, button2, button3, button4,
    enabled, "mod-wheel": modWheel
}) => {
    const messages = [];
    if (rotary1 !== undefined) {
        validateRotary(rotary1);
        messages.push(
            controllerMessage(channelNumber, ROTARY_1, rotary1));
    }
    if (rotary2 !== undefined) {
        validateRotary(rotary2);
        messages.push(
            controllerMessage(channelNumber, ROTARY_2, rotary2));
    }
    if (rotary3 !== undefined) {
        validateRotary(rotary3);
        messages.push(
            controllerMessage(channelNumber, ROTARY_3, rotary3));
    }
    if (rotary4 !== undefined) {
        validateRotary(rotary4);
        messages.push(
            controllerMessage(channelNumber, ROTARY_4, rotary4));
    }
    if (button1 !== undefined) {
        validateButton(button1);
        messages.push(
            controllerMessage(
                channelNumber,
                BUTTON_1,
                button1 === "on" ? BUTTON_ON : BUTTON_OFF
            )
        );
    }
    if (button2 !== undefined) {
        validateButton(button2);
        messages.push(
            controllerMessage(
                channelNumber,
                BUTTON_2,
                button2 === "on" ? BUTTON_ON : BUTTON_OFF
            )
        );
    }
    if (button3 !== undefined) {
        validateButton(button3);
        messages.push(
            controllerMessage(
                channelNumber,
                BUTTON_3,
                button3 === "on" ? BUTTON_ON : BUTTON_OFF
            )
        );
    }
    if (button4 !== undefined) {
        validateButton(button4);
        messages.push(
            controllerMessage(
                channelNumber,
                BUTTON_4,
                button4 === "on" ? BUTTON_ON : BUTTON_OFF
            )
        );
    }
    if (enabled !== undefined) {
        validateEnabled(enabled);
        messages.push(
            controllerMessage(
                channelNumber,
                ENABLED,
                enabled === "on" ? ENABLED_ON :
                    enabled === "off" ? ENABLED_OFF : ENABLED_BYPASS
            )
        );
    }
    if (modWheel !== undefined) {
        validateModWheel(modWheel);
        messages.push(
            controllerMessage(
                channelNumber,
                MOD_WHEEL,
                modWheel
            )
        );
    }
    return messages;
};

