/**
 * getMessages.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 22 Jul 2016
 */
import controllerMessage from "./controllerMessage";

export default mapping => (channelNumber, data) => {
    const messages = [];
    for (const [key, value] of mapping) {
        if (data[key] !== undefined) {
            messages.push(controllerMessage(
                channelNumber,
                value.controller,
                value.processor(data[key], value.name)
            ));
        }
    }
    return messages;
};
