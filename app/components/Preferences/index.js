/**
 * index.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 06 Jul 2016
 */
import React, { PropTypes } from "react";
import styles from "./styles.css";
import classnames from "classnames";

const Preferences = ({
    close,
    changeMidiOutput,
    refreshMidiOutputList,
    midi: { outputs, selectedOutput, error }
}) => (
    <div>
        <h1>
            <span>Preferences</span>
            <i className={classnames("fa fa-close", styles.button, styles.buttonTopRight)}
               onClick={close} />
        </h1>
        <div className={styles.prefRow}>
            <label htmlFor="midiOutput">MIDI output bus</label>
            <div className={styles.fieldWithButton}>
                <select id="midiOutput"
                        value={selectedOutput}
                        onChange={changeMidiOutput}
                        className={classnames({ [styles.error]: error })}>
                    {
                        Array.from(outputs.values()).map(output => (
                            <option key={output.id}
                                    value={output.id}>
                                {output.name}
                            </option>
                        ))
                    }
                </select>
                <i className={classnames("fa fa-refresh", styles.button)}
                   onClick={refreshMidiOutputList}></i>
            </div>
        </div>
    </div>
);

Preferences.propTypes = {
    close: PropTypes.func.isRequired,
    changeMidiOutput: PropTypes.func.isRequired,
    refreshMidiOutputList: PropTypes.func.isRequired,
    midi: PropTypes.shape({
        outputs: PropTypes.object.isRequired,
        selectedOutput: PropTypes.string.isRequired
    }).isRequired
};

export default Preferences;
