import { takeLatest } from "redux-saga/effects";
import { handleGetShowcase } from "./handlers/showcase";
import { getShowcase } from "../ducks/showcaseSlice";
import { handleGetItem } from "./handlers/item";
import { getItem } from "../ducks/itemSlice";
import { handleGetText } from "./handlers/text";
import { getText } from "../ducks/textSlice";

export function* watcherSaga() {
  yield takeLatest(getShowcase.type, handleGetShowcase);
  yield takeLatest(getItem.type, handleGetItem);
  yield takeLatest(getText.type, handleGetText);
}
