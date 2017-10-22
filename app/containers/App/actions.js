/*
 *
 * App actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function login(credential) {
  return {
    type: LOGIN_REQUEST,
    credential,
  };
}
export function loginSuccess(result) {
  return {
    type: LOGIN_SUCCESS,
    result,
  };
}
export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error,
  };
}
export function logout() {
  return {
    type: LOGOUT,
  };
}
