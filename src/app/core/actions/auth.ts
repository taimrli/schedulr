import {Action} from "@ngrx/store";

export const LOGIN = '[auth] login user';
export class LoginAction implements Action {
  type = LOGIN;
}

export const LOGGED_IN = '[auth] user logged in';
export class LoggedInAction implements Action {
  type = LOGGED_IN;
}

export const LOGOUT = '[auth] logout user';
export class LogoutAction implements Action {
  type = LOGOUT;
}

export const LOGGED_OUT = '[auth] user logged out';
export class LoggedOutAction implements Action {
  type = LOGGED_OUT;
}

export const LOAD_AUTH_STATE = '[auth] load user auth state';
export class LoadAuthStateAction implements Action {
  type = LOAD_AUTH_STATE;
}
