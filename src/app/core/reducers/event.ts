import {SchedulrEvent} from "../model/schedulr-event";
import {Action} from "@ngrx/store";
import {ADD_LANE, ADD_TRACK, CREATE_EVENT} from "../actions/event";

export interface EventState {
  event: SchedulrEvent
}

export const initialEventState: EventState = {
  event: null
};

export function eventReducer(state: EventState, action: Action): EventState {
  switch (action.type) {
    case CREATE_EVENT:
      return Object.assign({}, state, {
        event: new SchedulrEvent()
      });

    case ADD_LANE:
      const eventWithNewLanes = Object.assign({}, state.event, {
        lanes: state.event.lanes.splice(0).concat(action.payload)
      });
      return Object.assign({}, state, {
        event: eventWithNewLanes
      });

    case ADD_TRACK:
      const eventWithNewTracks = Object.assign({}, state.event, {
        tracks: state.event.tracks.splice(0).concat(action.payload)
      });
      return Object.assign({}, state, {
        event: eventWithNewTracks
      });

    default:
      return state;
  }
}
