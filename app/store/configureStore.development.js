import { createStore, applyMiddleware, compose } from "redux";
import createLogger from "redux-logger";
import { hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import sendMidi from "../sagas/sendMidi";
import updateLayout from "../sagas/updateLayout";
import openFile from "../sagas/openFile";

const logger = createLogger({
    level: "info",
    collapsed: true
});

const router = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(router, logger, sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : noop => noop
);

export default initialState => {
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(sendMidi, store.getState);
    sagaMiddleware.run(updateLayout);
    sagaMiddleware.run(openFile);

    if (module.hot) {
        module.hot.accept("../reducers", () =>
            store.replaceReducer(require("../reducers")) // eslint-disable-line global-require
        );
    }
    return store;
};
