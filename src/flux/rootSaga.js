import { all, fork } from "redux-saga/effects";
import userSagaWatcher from './user/sagas'
import trackSagaWatcher from "./tracks/sagas";

export default function* rootSaga() {
    yield all([fork(userSagaWatcher)])
    yield all([fork(trackSagaWatcher)])
}
