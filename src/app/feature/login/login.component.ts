import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {State} from "../../core/reducers/index";
import {Store} from "@ngrx/store";
import {LoginAction, LogoutAction} from "../../core/actions/auth";
import {AuthState} from "../../core/reducers/auth";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  authState$: Observable<AuthState>;

  constructor(private store: Store<State>) {
    this.authState$ = store.select(s => s.auth);
  }

  login() {
    this.store.dispatch(new LoginAction());
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
