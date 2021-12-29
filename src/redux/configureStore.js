import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import showcaseReducer from "./ducks/showcaseSlice";
import itemReducer from "./ducks/itemSlice";
import textReducer from "./ducks/textSlice";
import categoryReducer from "./ducks/categorySlice";
import clientReducer from "./ducks/clientSlice";
import agendaReducer from "./ducks/agendaSlice";
import shopReducer from "./ducks/shopSlice";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

//simplifies having more than one reducer
const reducers = combineReducers({
  showcase: showcaseReducer,
  item: itemReducer,
  text: textReducer,
  category: categoryReducer,
  client: clientReducer,
  agenda: agendaReducer,
  shop: shopReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
