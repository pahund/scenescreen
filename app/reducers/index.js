import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import midiOutput from "./midiOutput";
import scenes from "./scenes";
import layout from "./layout";
import transport from "./transport";
import config from "./config";

const rootReducer = combineReducers({
    routing,
    midiOutput,
    scenes,
    layout,
    transport,
    config
});

export default rootReducer;
