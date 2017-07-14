import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {State} from "../../core/reducers/index";
import {Store} from "@ngrx/store";
import {CreateEventAction, LoadEventAdministrationsAction} from "../../core/actions/event";
import {SchedulrEvent} from "app/core/model/schedulr-event";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit {

  events$: Observable<SchedulrEvent[]>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.events$ = this.store.select(s => s.event.eventAdministrations);
    this.store.dispatch(new LoadEventAdministrationsAction());
  }

  createEvent(): void {
    this.store.dispatch(new CreateEventAction());
  }
}
