import { call, put, /* select, */ takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, LOGOUT, SIGNIN_PATH } from './constants';
import { loginSuccess, loginFail } from './actions';
// Individual exports for testing

export function loginApi(credential) {
  return new Promise((resolve, reject) => {
    const now = new Date(Date.now());
    if (credential.username === 'demo' && credential.password === 'demo') {
      setTimeout(() => {
        resolve({
          token: true,
          expire: now.setHours(now.getHours() + 1),
        });
      }, 1000);
    } else {
      setTimeout(() => {
        reject('Login failed');
      }, 1000);
    }
  });
}
export function* login({ credential }) {
  try {
    const result = yield call(loginApi, credential);
    yield put(loginSuccess(result));
  } catch (e) {
    yield put(loginFail(e));
  }
}
export function* logoutRedirect() {
  yield put(push(SIGNIN_PATH));
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT, logoutRedirect);
}
