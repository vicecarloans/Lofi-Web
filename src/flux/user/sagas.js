import * as userActions from "./actions";
import { takeLatest, call, put, select } from "redux-saga/effects";
import { getProfileService } from "services/user";

function* getProfileSaga() {
  try {
    const userinfo = yield call(getProfileService);
    yield put(userActions.propagateUserSuccess(userinfo));
  } catch (err) {
    yield put(userActions.propagateUserFailure(err));
  }
}

export default function* userSagaWatcher() {
  yield takeLatest(userActions.PROPAGATE_USER, getProfileSaga);
}
