/**
 * fullRange.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 22 Jul 2016
 */
export default (value, name) => {
    if (typeof value !== "number") {
        throw new Error(
            `“${value}” is not valid for controller “${name}”, ` +
            "it must be a number"
        );
    }
    if (value < 0 || value > 127) {
        throw new Error(
            `“${value}” is not valid for controller “${name}”, ` +
            "it must be a number from 0 to 127"
        );
    }
    return value;
};
