import Home from "../components/Home";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";

const enhance = compose(
    connect(
        state => ({
            midiOutput: state.midiOutput,
            scenes: state.scenes
        })
    ),
    withHandlers({
        sceneTriggered: ({ midiOutput, scenes }) => sceneIndex =>
            scenes[sceneIndex].messages.forEach(message => midiOutput.send(message))
    })
);

export default enhance(Home);

