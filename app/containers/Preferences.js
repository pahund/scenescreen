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

const enhance = compose(
    connect(
        state => ({
            midiOutput: state.midiOutput
        })
    ),
    withHandlers({
        close: ({ dispatch }) => () => dispatch(navigate("/"))
    })
);

export default enhance(Preferences);
