/**
 * button.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 22 Jul 2016
 */
export default (value, name) => {
    if (value !== "on" && value !== "off") {
        throw new Error(
            `“${value}” is not valid for button “${name}”. ` +
            "Valid are: “on” or “off”"
        );
    }
    return value === "on" ? 1 : 0;
};
