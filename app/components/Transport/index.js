/**
 * index.js
 *
 * The transport bar with play button, tempo setting, etc.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jul 2016
 */
import React, { PropTypes } from "react";
import styles from "./styles.css";
import classnames from "classnames";
import { PLAYING } from "../../actions/changeTransportState";
import { RIENumber } from "riek";
import CurrentBeatAndBar from "../../containers/CurrentBeatAndBar";
import Button from "../Button";

const Transport = ({
    state,
    bars,
    tempo,
    beatsPerBar,
    changeBars,
    changeBeatsPerBar,
    changeTempo,
    play,
    stop
}) => (
    <div className={styles.transport}>
        <div className={styles.buttonWrap}>
            <div className={styles.info}>
                <div>
                    <RIENumber value={bars}
                               change={changeBars}
                               classEditing={classnames(styles.editing, styles.medium)}
                               propName="bars" />
                    <br />
                    <CurrentBeatAndBar />
                </div>
            </div>
        </div>
        <div className={styles.buttonWrap}>
            <div className={styles.info}>
                <div>
                    <RIENumber value={tempo}
                               change={changeTempo}
                               classEditing={classnames(styles.editing, styles.wide)}
                               propName="tempo" />
                    <br />
                    <RIENumber value={beatsPerBar}
                               change={changeBeatsPerBar}
                               classEditing={classnames(styles.editing, styles.narrow)}
                               propName="beatsPerBar" />/4
                </div>
            </div>
        </div>
        <div className={styles.buttonWrap}>
            <Button handle={stop}
                    instant
                    icon="stop"
                    size="large" />
        </div>
        <div className={styles.buttonWrap}>
            <Button handle={play}
                    instant
                    icon="play"
                    active={state === PLAYING}
                    size="large" />
        </div>
    </div>
);

Transport.propTypes = {
    play: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    changeBars: PropTypes.func.isRequired,
    changeBeatsPerBar: PropTypes.func.isRequired,
    changeTempo: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired,
    bars: PropTypes.number.isRequired,
    tempo: PropTypes.number.isRequired,
    beatsPerBar: PropTypes.number.isRequired
};

export default Transport;

