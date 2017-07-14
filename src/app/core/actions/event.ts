import {Action} from "@ngrx/store";
import {Track} from "../model/track";
import {Lane} from "../model/lane";
import {SchedulrEvent} from "../model/schedulr-event";

export const CREATE_EVENT = '[event] create empty event';
export class CreateEventAction implements Action {
  type = CREATE_EVENT;
}

export const LOAD_EVENT_ADMINISTRATIONS = '[event] load all event administrations';
export class LoadEventAdministrationsAction implements Action {
  type = LOAD_EVENT_ADMINISTRATIONS;
}

export const EVENT_ADMINISTRATIONS_LOADED = '[event] event administrations loaded';
export class EventAdministrationsLoadedAction implements Action {
  type = EVENT_ADMINISTRATIONS_LOADED;

  constructor(public payload: SchedulrEvent[]) {
  }
}
