import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import midiOutput from "./midiOutput";
import scenes from "./scenes";

const rootReducer = combineReducers({
    routing,
    midiOutput,
    scenes
});

export default rootReducer;
