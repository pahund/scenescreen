/**
 * Preferences.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 07 Jul 2016
 */
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import navigate from "../actions/navigate";
import Preferences from "../components/Preferences";
import changeMidiOutput from "../actions/changeMidiOutput";
import refreshMidiOutputList from "../actions/refreshMidiOutputList";

const enhance = compose(
    connect(
        state => ({
            midi: state.midi
        })
    ),
    withHandlers({
        changeMidiOutput: ({ dispatch }) => event =>
            dispatch(changeMidiOutput(event.target.value)),
        refreshMidiOutputList: ({ dispatch }) => () => dispatch(refreshMidiOutputList()),
        close: ({ dispatch }) => () => dispatch(navigate("/"))
    })
);

export default enhance(Preferences);
