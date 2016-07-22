/**
 * enabled.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 22 Jul 2016
 */
export default (value, name) => {
    if (value !== "on" && value !== "off" && value !== "bypass") {
        throw new Error(
            `“${value}” is not valid for switch “${name}”. ` +
            "Valid are: “on”, “off” or “bypass”"
        );
    }
    return value === "off" ? 0 : value === "on" ? 1 : 2;
};
