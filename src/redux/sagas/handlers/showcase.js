import { call, put } from "redux-saga/effects";
import { setShowcase } from "../../ducks/showcaseSlice";
import { requestGetShowcase } from "../requests/showcase";

export function* handleGetShowcase(action) {
  try {
    //const response = yield call(requestGetUser, id);
    const response = yield call(requestGetShowcase);
    const { data } = response;
    yield put(setShowcase({ ...data }));
  } catch (error) {
    console.log("handlerError", error);
  }
}
