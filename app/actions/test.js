/**
 * test.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 14 Jul 2016
 */
import { TEST } from ".";

export default (message = "test") => ({
    type: TEST,
    message
});
