/**
 * Transport.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 02 Jul 2016
 */
import Transport from "../components/Transport";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import play from "../actions/play";
import stop from "../actions/stop";
import changeBars from "../actions/performanceSettings/changeBars";
import changeBeatsPerBar from "../actions/performanceSettings/changeBeatsPerBar";
import changeTempo from "../actions/performanceSettings/changeTempo";
import toggleAutopilot from "../actions/performanceSettings/toggleAutopilot";

const enhance = compose(
    connect(state => ({
        state: state.transport.state,
        tempo: state.config.tempo,
        beatsPerBar: state.config.beatsPerBar,
        bars: state.config.bars,
        autopilotActive: state.transport.autopilotActive
    })),
    withHandlers({
        play: ({ dispatch }) => () => dispatch(play()),
        stop: ({ dispatch }) => () => dispatch(stop()),
        toggleAutopilot: ({ dispatch }) => () => dispatch(toggleAutopilot()),
        changeBars: ({ dispatch }) => ({ bars }) => dispatch(changeBars(parseInt(bars, 10))),
        changeBeatsPerBar: ({ dispatch }) => ({ beatsPerBar }) =>
            dispatch(changeBeatsPerBar(parseInt(beatsPerBar, 10))),
        changeTempo: ({ dispatch }) => ({ tempo }) => dispatch(changeTempo(parseInt(tempo, 10)))
    })
);

export default enhance(Transport);
