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

function getAddress(channel) {
    return channel + 175;
}

export default (channel, controller, value) => [getAddress(channel), controller, value];

