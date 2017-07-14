import {LOGIN, LOGGED_OUT, LOGGED_IN, LOGOUT} from "../actions/auth";
import {Action} from "@ngrx/store";

export interface AuthState {
  loggedIn: boolean
}

export const initialAuthState: AuthState = {
  loggedIn: false
};

export function authReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        loggedIn: true
      });

    case LOGGED_OUT:
      return Object.assign({}, state, {
        loggedIn: false
      });

    default:
      return state;
  }
}
