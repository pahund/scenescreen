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

const enhance = compose(
    connect(state => ({
        state: state.transport.state,
        bar: state.transport.bar,
        beat: state.transport.beat,
        tempo: state.config.tempo,
        beatsPerBar: state.config.beatsPerBar
    })),
    withHandlers({
        play: ({ dispatch }) => () => dispatch(play()),
        stop: ({ dispatch }) => () => dispatch(stop())
    })
);

export default enhance(Transport);
