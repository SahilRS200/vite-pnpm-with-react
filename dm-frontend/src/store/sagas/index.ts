import { all, fork } from "redux-saga/effects";
import mockSaga from "./mockSaga";

export function* rootSaga(): any {
    yield all([fork(mockSaga)])
}

export default rootSaga;