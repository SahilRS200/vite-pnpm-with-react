import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_LOGIN_STATUS, setLoginStatus } from "../actions/mockActions";

const mockCheckLogin = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({
                isLoggedIn: true
            })
        }, 500);
    })
}

function* workerCheckLogin(): SagaIterator {
    console.log('in auth saga')
    const data = yield call(mockCheckLogin);
    console.log(data);
    yield put(setLoginStatus(data))
}

function* mockSaga(): SagaIterator {
    yield takeEvery(GET_LOGIN_STATUS, workerCheckLogin)
}

export default mockSaga;
