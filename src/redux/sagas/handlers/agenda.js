import { call, put } from "redux-saga/effects";
import { setAgenda } from "../../ducks/agendaSlice";
import { requestGetAgenda } from "../requests/agenda";

export function* handleGetAgenda(action) {
  try {
    const response = yield call(requestGetAgenda);
    const { data } = response;
    yield put(setAgenda({ ...data }));
  } catch (error) {
    console.log("handlerError", error);
  }
}
