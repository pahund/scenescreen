/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jul 2016
 */
import React, { PropTypes } from "react";

const CurrentBeatAndBar = ({ bar, beat }) => (
    <span>{bar}.{beat}</span>
);

CurrentBeatAndBar.propTypes = {
    bar: PropTypes.number.isRequired,
    beat: PropTypes.number.isRequired
};

export default CurrentBeatAndBar;
