/**
 * getCombinatorMessages.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import controllerMessage, {
    CMB_ROTARY_1,
    CMB_ROTARY_2,
    CMB_ROTARY_3,
    CMB_ROTARY_4,
    CMB_BUTTON_1,
    CMB_BUTTON_2,
    CMB_BUTTON_3,
    CMB_BUTTON_4,
    CMB_ENABLED,
    CMB_MOD_WHEEL,
    BUTTON_ON,
    BUTTON_OFF,
    ENABLED_OFF,
    ENABLED_ON,
    ENABLED_BYPASS
} from "./controllerMessage";

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
    if (rotary1) {
        validateRotary(rotary1);
        messages.push(
            controllerMessage(channelNumber, CMB_ROTARY_1, rotary1));
    }
    if (rotary2) {
        validateRotary(rotary2);
        messages.push(
            controllerMessage(channelNumber, CMB_ROTARY_2, rotary2));
    }
    if (rotary3) {
        validateRotary(rotary3);
        messages.push(
            controllerMessage(channelNumber, CMB_ROTARY_3, rotary3));
    }
    if (rotary4) {
        validateRotary(rotary4);
        messages.push(
            controllerMessage(channelNumber, CMB_ROTARY_4, rotary4));
    }
    if (button1) {
        validateButton(button1);
        messages.push(
            controllerMessage(
                channelNumber,
                CMB_BUTTON_1,
                button1 === "on" ? BUTTON_ON : BUTTON_OFF
            )
        );
    }
    if (button2) {
        validateButton(button2);
        messages.push(
            controllerMessage(
                channelNumber,
                CMB_BUTTON_2,
                button2 === "on" ? BUTTON_ON : BUTTON_OFF
            )
        );
    }
    if (button3) {
        validateButton(button3);
        messages.push(
            controllerMessage(
                channelNumber,
                CMB_BUTTON_3,
                button3 === "on" ? BUTTON_ON : BUTTON_OFF
            )
        );
    }
    if (button4) {
        validateButton(button4);
        messages.push(
            controllerMessage(
                channelNumber,
                CMB_BUTTON_4,
                button4 === "on" ? BUTTON_ON : BUTTON_OFF
            )
        );
    }
    if (enabled) {
        validateEnabled(enabled);
        messages.push(
            controllerMessage(
                channelNumber,
                CMB_ENABLED,
                enabled === "on" ? ENABLED_ON :
                    enabled === "off" ? ENABLED_OFF : ENABLED_BYPASS
            )
        );
    }
    if (modWheel) {
        validateModWheel(modWheel);
        messages.push(
            controllerMessage(
                channelNumber,
                CMB_MOD_WHEEL,
                modWheel
            )
        );
    }
    return messages;
};

