import {Action} from "@ngrx/store";

export const LOGIN = '[auth] login user';
export class LoginAction implements Action {
  type = LOGIN;
}

export const LOGIN_SUCCESS = '[auth] login success';
export class LoginSuccessAction implements Action {
  type = LOGIN_SUCCESS;
}

export const LOGIN_FAILURE = '[auth] login failure';
export class LoginFailureAction implements Action {
  type = LOGIN_FAILURE;
}

export const LOGOUT = '[auth] logout user';
export class LogoutAction implements Action {
  type = LOGOUT;
}

export const LOGOUT_SUCCESS = '[auth] logout success';
export class LogoutSuccessAction implements Action {
  type = LOGOUT_SUCCESS;
}

export const LOAD_AUTH_STATE = '[auth] load user auth state';
export class LoadAuthStateAction implements Action {
  type = LOAD_AUTH_STATE;
}
