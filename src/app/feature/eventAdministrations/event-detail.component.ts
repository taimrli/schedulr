import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {SchedulrEvent} from "../../core/model/schedulr-event";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDetailComponent {

  @Input()
  event: SchedulrEvent;

}
