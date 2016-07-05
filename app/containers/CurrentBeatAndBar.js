/**
 * CurrentBeatAndBar.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 05 Jul 2016
 */
import CurrentBeatAndBar from "../components/CurrentBeatAndBar";
import { connect } from "react-redux";

const enhance = connect(state => ({
    bar: state.transport.bar,
    beat: state.transport.beat
}));

export default enhance(CurrentBeatAndBar);

