import { createStore, applyMiddleware } from "redux";
import { hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import sendMidi from "../sagas/sendMidi";
import updateLayout from "../sagas/updateLayout";
import openFile from "../sagas/openFile";

const router = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(router, sagaMiddleware);

export default initialState => {
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(sendMidi, store.getState);
    sagaMiddleware.run(updateLayout);
    sagaMiddleware.run(openFile);
    return store;
};
