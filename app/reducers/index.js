import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import midi from "./midi";
import scenes from "./scenes";
import layout from "./layout";
import transport from "./transport";
import config from "./config";

const rootReducer = combineReducers({
    routing,
    midi,
    scenes,
    layout,
    transport,
    config
});

export default rootReducer;
