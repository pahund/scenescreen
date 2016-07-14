import { createStore, applyMiddleware, compose } from "redux";
import { hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import runSagas from "./runSagas";
import {
    SEND_MIDI
} from "../actions";

const router = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(router, sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension({
        actionsBlacklist: [
            SEND_MIDI
        ]
    }) : noop => noop
);

export default initialState => {
    const store = createStore(rootReducer, initialState, enhancer);
    runSagas(sagaMiddleware, store);

    if (module.hot) {
        module.hot.accept("../reducers", () =>
            store.replaceReducer(require("../reducers")) // eslint-disable-line global-require
        );
    }
    return store;
};
