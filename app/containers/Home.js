import Home from "../components/Home";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import sendMidi from "../actions/sendMidi";
import selectScene from "../actions/selectScene";
import scheduleScene from "../actions/scheduleScene";
import requestFileOpenDialog from "../actions/requestFileOpenDialog";
import { PLAYING } from "../actions/changeTransportState";

const enhance = compose(
    connect(
        state => ({
            scenes: state.scenes,
            layout: state.layout,
            state: state.transport.state
        })
    ),
    withHandlers({
        sceneTriggered: ({ dispatch, scenes, state }) => sceneIndex => {
            dispatch(sendMidi(scenes[sceneIndex].messages));
            if (state === PLAYING) {
                dispatch(scheduleScene(sceneIndex));
                return;
            }
            dispatch(selectScene(sceneIndex));
        },
        requestFileOpenDialog: ({ dispatch }) => () => dispatch(requestFileOpenDialog())
    })
);

export default enhance(Home);

