/**
 * multi.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 31 Aug 2016
 */
export default (...processors) => (value, name) => {
    let error;
    for (const processor of processors) {
        try {
            return processor(value, name);
        } catch (e) {
            error = e;
        }
    }
    throw error;
};
