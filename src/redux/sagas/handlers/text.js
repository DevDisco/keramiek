import { call, put } from "redux-saga/effects";
import { setText } from "../../ducks/textSlice";
import { requestGetText } from "../requests/text";

export function* handleGetText(action) {
  try {
    //const response = yield call(requestGetUser, id);
    const response = yield call(requestGetText);
    const { data } = response;
    yield put(setText({ ...data }));
  } catch (error) {
    console.log("handlerError", error);
  }
}
