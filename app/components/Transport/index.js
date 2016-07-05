/**
 * index.js
 *
 * The transport bar with play button, tempo setting, etc.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jul 2016
 */
import React, { Component, PropTypes } from "react";
import styles from "./styles.css";
import classnames from "classnames";
import { PLAYING } from "../../actions/changeTransportState";
import { RIENumber } from "riek";
import CurrentBeatAndBar from "../../containers/CurrentBeatAndBar";

class Transport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: {}
        };
        this.bindHandlers("stopMouseDown", "stopMouseUp", "playMouseDown", "playMouseUp");
    }

    bindHandlers(...methodNames) {
        for (const methodName of methodNames) {
            this[methodName] = this[methodName].bind(this);
        }
    }

    stopMouseDown() {
        this.setState({ pressed: { stop: true } });
        this.props.stop();
    }

    stopMouseUp() {
        this.setState({ pressed: { stop: false } });
    }

    playMouseDown() {
        this.setState({ pressed: { play: true } });
        this.props.play();
    }

    playMouseUp() {
        this.setState({ pressed: { play: false } });
    }

    render() {
        const {
            state,
            bars,
            tempo,
            beatsPerBar,
            changeBars,
            changeBeatsPerBar,
            changeTempo
        } = this.props;
        const { pressed } = this.state;
        const className = {
            stop: classnames(
                styles.button,
                { [styles.pressed]: pressed.stop }
            ),
            play: classnames(
                styles.button,
                { [styles.active]: state === PLAYING },
                { [styles.pressed]: pressed.play }
            )
        };
        return (
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
                    <div className={className.stop}
                         onMouseDown={this.stopMouseDown}
                         onMouseUp={this.stopMouseUp}>
                        <i className="fa fa-stop" />
                    </div>
                </div>
                <div className={styles.buttonWrap}>
                    <div className={className.play}
                         onMouseDown={this.playMouseDown}
                         onMouseUp={this.playMouseUp}>
                        <i className="fa fa-play" />
                    </div>
                </div>
            </div>
        );
    }
}

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

