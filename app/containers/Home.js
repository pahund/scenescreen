import Home from "../components/Home";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import sendMidi from "../actions/sendMidi";
import selectScene from "../actions/selectScene";
import requestFileOpenDialog from "../actions/requestFileOpenDialog";

const enhance = compose(
    connect(
        state => ({
            scenes: state.scenes,
            layout: state.layout
        })
    ),
    withHandlers({
        sceneTriggered: ({ dispatch, scenes }) => sceneIndex => {
            dispatch(selectScene(sceneIndex));
            dispatch(sendMidi(scenes[sceneIndex].messages));
        },
        requestFileOpenDialog: ({ dispatch }) => () => dispatch(requestFileOpenDialog())
    })
);

export default enhance(Home);

