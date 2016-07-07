/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import React, { PropTypes } from "react";
import styles from "./styles.css";
import classnames from "classnames";

const Preferences = ({ close }) => (
    <div>
        <h1>
            <span>Preferences</span>
            <i className={classnames("fa fa-close", styles.buttonTopRight)}
               onClick={close} />
        </h1>
    </div>
);

Preferences.propTypes = {
    close: PropTypes.func.isRequired
};

export default Preferences;
