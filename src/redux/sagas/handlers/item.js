import { call, put } from "redux-saga/effects";
import { setItem } from "../../ducks/itemSlice";
import { requestGetItem } from "../requests/item";

export function* handleGetItem(action) {
  try {
    //we can use payloads from the useEffect in App
    const { payload } = action;
    const { id } = payload;

    //const response = yield call(requestGetUser, id);
    const response = yield call(requestGetItem, id);
    const { data } = response;
    yield put(setItem({ ...data }));
  } catch (error) {
    console.log("handlerError", error);
  }
}
