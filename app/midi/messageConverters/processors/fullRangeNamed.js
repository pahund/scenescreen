/**
 * fullRangeNamed.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Aug 2016
 */
import named from "./named";

export default (...names) => (value, name) =>
    Math.ceil(128 / names.length * named(...names)(value, name));
