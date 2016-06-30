/**
 * controllerMessage.js
 *
 * Creates controller messages.
 *
 * @param channel The MIDI channel (1-16)
 * @param controller The controller number (use one of the constants provided)
 * @param value The value (0-127)
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 30 Jun 2016
 */

// controllers for Combinator devices
export const CMB_MOD_WHEEL = 0x1;
export const CMB_ENABLED = 0x9;
export const CMB_ROTARY_1 = 0x47;
export const CMB_ROTARY_2 = 0x48;
export const CMB_ROTARY_3 = 0x49;
export const CMB_ROTARY_4 = 0x4a;
export const CMB_BUTTON_1 = 0x4b;
export const CMB_BUTTON_2 = 0x4c;
export const CMB_BUTTON_3 = 0x4d;
export const CMB_BUTTON_4 = 0x4e;

export const BUTTON_ON = 1;
export const BUTTON_OFF = 0;
export const ENABLED_BYPASS = 2;
export const ENABLED_ON = 1;
export const ENABLED_OFF = 0;

function getAddress(channel) {
    return channel + 175;
}

export default (channel, controller, value) => [getAddress(channel), controller, value];

