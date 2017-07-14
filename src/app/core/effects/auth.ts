import {Injectable} from "@angular/core";
import {Effect, Actions} from '@ngrx/effects';
import {AuthService} from "../services/auth.service";
import {
  LOAD_AUTH_STATE, LoadAuthStateAction, LOGIN, LoggedOutAction, LoggedInAction,
  LOGOUT
} from "../actions/auth";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import {of} from 'rxjs/observable/of';
import {Action} from "@ngrx/store";

@Injectable()
export class AuthEffects {

  @Effect()
  loadUser$: Observable<Action> = this.actions$
    .ofType(LOAD_AUTH_STATE)
    .startWith(new LoadAuthStateAction())
    .switchMap((action) =>
      this.authService.user
        .switchMap((user) => {
          if (user) {
            return of(new LoggedInAction());
          } else {
            return of(new LoggedOutAction());
          }
        })
    );

  @Effect({dispatch: false})
  loginUser$: Observable<any> = this.actions$
    .ofType(LOGIN)
    .switchMap((action) =>
      this.authService.login()
    );

  @Effect({dispatch: false})
  logoutUser$: Observable<any> = this.actions$
    .ofType(LOGOUT)
    .switchMap((action) =>
      this.authService.logout()
    );

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
