/**
 * named.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 24 Jul 2016
 */
export default (...names) => (value, name) => {
    if (!names.includes(value)) {
        throw new Error(
            `“${value}” is not valid for “${name}”. ` +
            `Valid are: “${names.join("”, “")}”`
        );
    }
    return names.indexOf(value);
};
