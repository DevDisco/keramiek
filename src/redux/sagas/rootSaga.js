import { takeLatest } from "redux-saga/effects";
import { handleGetShowcase } from "./handlers/showcase";
import { getShowcase } from "../ducks/showcaseSlice";
import { handleGetItem } from "./handlers/item";
import { getItem } from "../ducks/itemSlice";
import { handleGetText } from "./handlers/text";
import { getText } from "../ducks/textSlice";
import { handleGetCategory } from "./handlers/category";
import { getCategory } from "../ducks/categorySlice";
import { handleGetClient } from "./handlers/client";
import { getClient } from "../ducks/clientSlice";
import { handleGetAgenda } from "./handlers/agenda";
import { getAgenda } from "../ducks/agendaSlice";

export function* watcherSaga() {
  yield takeLatest(getShowcase.type, handleGetShowcase);
  yield takeLatest(getItem.type, handleGetItem);
  yield takeLatest(getText.type, handleGetText);
  yield takeLatest(getCategory.type, handleGetCategory);
  yield takeLatest(getClient.type, handleGetClient);
  yield takeLatest(getAgenda.type, handleGetAgenda);
}
