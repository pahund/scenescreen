/**
 * wallaby.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 03 Oct 2016
 */
module.exports = wallaby => ({
    files: [
        "app/**/*.js"
    ],
    tests: [
        "test/unit/**/*Test.js"
    ],
    env: {
        type: "node"
    },
    testFramework: "mocha",
    compilers: {
        "**/*.js": wallaby.compilers.babel()
    },
    bootstrap: () => {
        /* eslint-disable global-require */
        const path = require("path");
        return require(
            path.join(wallaby.localProjectDir, "node_modules/babel-polyfill/dist/polyfill.js")
        );
        /* eslint-enable global-require */
    }
});

