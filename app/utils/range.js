/**
 * range.js
 *
 * Takes 0 to 3 arguments and creates an array of numbers accordingly.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 27 May 2016
 */

export default (...args) => {
    const array = [];
    let start,
        end,
        inc;
    if (args[0] === undefined && args[1] === undefined && args[2] === undefined) {
        start = 0;
        end = 9;
        inc = 1;
    } else if (args[1] === undefined && args[2] === undefined) {
        start = 0;
        end = args[0];
        inc = start > end ? -1 : 1;
    } else if (args[2] === undefined) {
        start = args[0];
        end = args[1];
        inc = start > end ? -1 : 1;
    } else {
        start = args[0];
        end = args[1];
        inc = Math.abs(args[2]) * (start > end ? -1 : 1);
    }

    if (start === end) {
        array.push(start);
        return array;
    }
    for (let i = start; (start < end ? i <= end : i >= end); i += inc) {
        array.push(i);
    }
    return array;
};
