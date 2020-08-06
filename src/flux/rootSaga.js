import { all, fork } from "redux-saga/effects";
import userSagaWatcher from './user/sagas'

export default function* rootSaga() {
    yield all([fork(userSagaWatcher)])
}
