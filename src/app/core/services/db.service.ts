import {Injectable} from '@angular/core';
import {SchedulrEvent} from "../model/schedulr-event";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class DbService {

  constructor(private auth: AuthService, private db: AngularFireDatabase) {
  }

  createEvent(): void {
    const created = {name: 'new event'} as SchedulrEvent;
    this.auth.user
      .map(user => user.uid)
      .map(id => {
        const path = `/${id}/administrations`;
        this.db.list(path).push(created)
      })
      .subscribe();
  }

  loadEventAdministrations(): Observable<any[]> {
    return this.auth.user
      .map(user => user.uid)
      .flatMap(id => {
        const path = `/${id}/administrations`;
        return this.db.list(path)
      });
  }
}
