import Home from "../components/Home";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import sendMidi from "../actions/sendMidi";
import selectScene from "../actions/selectScene";

const enhance = compose(
    connect(
        state => ({
            scenes: state.scenes
        })
    ),
    withHandlers({
        sceneTriggered: ({ dispatch, scenes }) => sceneIndex => {
            dispatch(selectScene(sceneIndex));
            dispatch(sendMidi(scenes[sceneIndex].messages));
        }
    })
);

export default enhance(Home);

