import Home from "../components/Home";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import sendMidi from "../actions/sendMidi";

const enhance = compose(
    connect(
        state => ({
            scenes: state.scenes
        })
    ),
    withHandlers({
        sceneTriggered: ({ dispatch, scenes }) => sceneIndex =>
            dispatch(sendMidi(scenes[sceneIndex].messages))
    })
);

export default enhance(Home);

