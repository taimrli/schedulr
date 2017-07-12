import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthService {

  private _user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this._user = afAuth.authState;
  }

  get user(): Observable<firebase.User> {
    return this._user;
  }

  login(): Observable<any> {
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  logout(): Observable<any> {
    return Observable.fromPromise(this.afAuth.auth.signOut());
  }
}
