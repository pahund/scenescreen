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
import changeBars from "../actions/changeBars";
import changeBeatsPerBar from "../actions/changeBeatsPerBar";
import changeTempo from "../actions/changeTempo";

const enhance = compose(
    connect(state => ({
        state: state.transport.state,
        tempo: state.config.tempo,
        beatsPerBar: state.config.beatsPerBar,
        bars: state.config.bars
    })),
    withHandlers({
        play: ({ dispatch }) => () => dispatch(play()),
        stop: ({ dispatch }) => () => dispatch(stop()),
        changeBars: ({ dispatch }) => ({ bars }) => dispatch(changeBars(parseInt(bars, 10))),
        changeBeatsPerBar: ({ dispatch }) => ({ beatsPerBar }) =>
            dispatch(changeBeatsPerBar(parseInt(beatsPerBar, 10))),
        changeTempo: ({ dispatch }) => ({ tempo }) => dispatch(changeTempo(parseInt(tempo, 10)))
    })
);

export default enhance(Transport);
