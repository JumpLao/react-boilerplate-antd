import moment from 'moment';
import { call, put, /* select, */ takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, LOGOUT, SIGNIN_PATH } from './constants';
import { loginSuccess, loginFail } from './actions';
// Individual exports for testing

export function loginApi(credential) {
  return new Promise((resolve, reject) => {
    if (credential.username === 'demo' && credential.password === 'demo') {
      setTimeout(() => {
        resolve({
          token: true,
          expire: moment().add(1, 'h').format(),
        });
      }, 1000);
    } else {
      setTimeout(() => {
        reject('Login failed');
      }, 1000);
    }
  });
}
export function logoutApi() {
  return new Promise((resolve) => {
    resolve({});
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
// export function* logout() {
//   try {
//     const result = yield call(logoutApi);
//     yield put(logoutSucccess(result));
//   } catch (e) {
//     yield put(logoutFail(e));
//   }
// }

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT, logoutRedirect);
}
