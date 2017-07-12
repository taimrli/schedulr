import {ActionReducer, combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core";
import {storeFreeze} from "ngrx-store-freeze";
import {environment} from "../../../environments/environment";
import {EventState, eventReducer, initialEventState} from "./event";
import {authReducer, AuthState, initialAuthState} from "./auth";
import {initialNavState, navReducer, NavState} from "./nav";

export interface State {
  event: EventState,
  auth: AuthState,
  nav: NavState
}

export const initialState: State = {
  event: initialEventState,
  auth: initialAuthState,
  nav: initialNavState
};

const reducers = {
  event: eventReducer,
  auth: authReducer,
  nav: navReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
