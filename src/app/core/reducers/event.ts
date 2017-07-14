import {SchedulrEvent} from "../model/schedulr-event";
import {Action} from "@ngrx/store";
import {EVENT_ADMINISTRATIONS_LOADED} from "../actions/event";

export interface EventState {
  eventSubscriptions: SchedulrEvent[];
  eventAdministrations: SchedulrEvent[];
  selectedEventSubscription: SchedulrEvent;
  selectedEventAdministration: SchedulrEvent;
}

export const initialEventState: EventState = {
  eventSubscriptions: [],
  eventAdministrations: [],
  selectedEventSubscription: null,
  selectedEventAdministration: null
};

export function eventReducer(state: EventState, action: Action): EventState {
  switch (action.type) {

    case EVENT_ADMINISTRATIONS_LOADED:
      return Object.assign({}, state, {
        eventAdministrations: action.payload
      });

    default:
      return state;
  }
}
