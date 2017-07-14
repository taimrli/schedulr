import {Injectable} from "@angular/core";
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import {Action} from "@ngrx/store";
import {
  CREATE_EVENT, EventAdministrationsLoadedAction, LOAD_EVENT_ADMINISTRATIONS
} from "../actions/event";
import {SchedulrEvent} from "../model/schedulr-event";
import {DbService} from "../services/db.service";

@Injectable()
export class EventEffects {

  @Effect({dispatch: false})
  createEvent$: Observable<any> = this.actions$
    .ofType(CREATE_EVENT)
    .do((action: any) =>
      this.db.createEvent()
    );

  @Effect()
  loadEventAdministrations$: Observable<Action> = this.actions$
    .ofType(LOAD_EVENT_ADMINISTRATIONS)
    .mergeMap((action: any) =>
      this.db.loadEventAdministrations()
        .map((loaded: SchedulrEvent[]) => {
          return new EventAdministrationsLoadedAction(loaded);
        })
    );

  constructor(private actions$: Actions, private db: DbService) {
  }
}
