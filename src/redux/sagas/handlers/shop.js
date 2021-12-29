import { call, put } from "redux-saga/effects";
import { setShop } from "../../ducks/shopSlice";
import { requestGetShop } from "../requests/shop";

export function* handleGetShop(action) {
  try {
    //we can use payloads from the useEffect in App
    const { payload } = action;
    const { category } = payload;

    const response = yield call(requestGetShop, category);
    const { data } = response;
    yield put(setShop({ ...data }));
  } catch (error) {
    console.log("handlerError", error);
  }
}
