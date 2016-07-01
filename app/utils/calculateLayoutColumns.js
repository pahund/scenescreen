/**
 * calculateLayoutColumns.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 01 Jul 2016
 */
export default () =>
    window.matchMedia("(max-width: 300px)").matches ? 1 :
    window.matchMedia("(max-width: 600px)").matches ? 2 :
    window.matchMedia("(max-width: 1200px)").matches ? 4 : 8;
