import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS} from "../actions/auth";
import {Action} from "@ngrx/store";

export interface AuthState {
  loggedIn: boolean
}

export const initialAuthState: AuthState = {
  loggedIn: false
};

export function authReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true
      });

    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: false
      });

    default:
      return state;
  }
}
