/**
 * ErrorMessage/index.js
 *
 * Displays an error message if initialization of the program went horribly wrong.
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 01 Jul 2016
 */
import React, { PropTypes } from "react";

const ErrorMessage = ({ message }) => (
    <div>
        <h1>Oops!</h1>
        <p>Something went wrong...</p>
        <blockquote>{message}</blockquote>
    </div>
);

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
};

export default ErrorMessage;
