import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import showcaseReducer from "./ducks/showcaseSlice";
import itemReducer from "./ducks/itemSlice";
import textReducer from "./ducks/textSlice";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

//simplifies having more than one reducer
const reducers = combineReducers({
  showcase: showcaseReducer,
  item: itemReducer,
  text: textReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
