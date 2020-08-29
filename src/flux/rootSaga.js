import { all, fork } from "redux-saga/effects";
import userSagaWatcher from './user/sagas'
import trackSagaWatcher from "./tracks/sagas";
import albumSagaWatcher from './albums/sagas'

export default function* rootSaga() {
    yield all([fork(userSagaWatcher)])
    yield all([fork(trackSagaWatcher)])
    yield all([fork(albumSagaWatcher)])
}
