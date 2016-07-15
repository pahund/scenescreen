/**
 * reloadFile.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 15 Jul 2016
 */
import { RELOAD_FILE } from ".";

export default data => ({
    type: RELOAD_FILE,
    data
});
