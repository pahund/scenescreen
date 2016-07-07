/**
 * navigate.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 07 Jul 2016
 */
import { NAVIGATE } from ".";

export default url => ({
    type: NAVIGATE,
    url
});
