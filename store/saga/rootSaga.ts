import { put, takeEvery } from 'redux-saga/effects'

function* fetchUser() {
  try {
    yield put({type: "USER_FETCH_SUCCEEDED"});
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED"});
  }
}

function* rootSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export {
  rootSaga
}
