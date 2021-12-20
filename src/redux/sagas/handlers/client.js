import { call, put } from "redux-saga/effects";
import { SetClient } from "../../ducks/clientSlice";
import { requestGetClient } from "../requests/client";

export function* handleGetClient(action) {
  try {
    //const response = yield call(requestGetUser, id);
    const response = yield call(requestGetClient);
    const { data } = response;
    yield put(SetClient({ ...data }));
  } catch (error) {
    console.log("handlerError", error);
  }
}
