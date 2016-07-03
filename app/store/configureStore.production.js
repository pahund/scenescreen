import { createStore, applyMiddleware } from "redux";
import { hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import runSagas from "./runSagas";

const router = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(router, sagaMiddleware);

export default initialState => {
    const store = createStore(rootReducer, initialState, enhancer);
    runSagas(sagaMiddleware, store);
    return store;
};
