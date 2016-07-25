/**
 * steps.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
export default (from, to) => (value, name) => {
    if (typeof value !== "number") {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            "it must be a number"
        );
    }
    if (value < from || value > to) {
        throw new Error(
            `“${value}” is not valid for control “${name}”, ` +
            `it must be a number from ${from} to ${to}`
        );
    }
    return value;
};

