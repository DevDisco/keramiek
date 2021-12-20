import { call, put } from "redux-saga/effects";
import { setCategory } from "../../ducks/categorySlice";
import { requestGetCategory } from "../requests/category";

export function* handleGetCategory(action) {
  try {
    //we can use payloads from the useEffect in App
    const { payload } = action;
    const { category } = payload;

    const response = yield call(requestGetCategory, category);
    const { data } = response;
    yield put(setCategory({ ...data }));
  } catch (error) {
    console.log("handlerError", error);
  }
}
