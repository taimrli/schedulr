import {Action} from "@ngrx/store";
import {Track} from "../model/track";
import {Lane} from "../model/lane";

export const CREATE_EVENT = '[event] create empty event';
export class CreateEventAction implements Action {
  type = CREATE_EVENT;
}

export const ADD_TRACK = '[event] add track to event';
export class AddTrackAction implements Action {
  type = ADD_TRACK;

  constructor(public payload: Track) {
  }
}

export const ADD_LANE = '[event] add lane to event';
export class AddLaneAction implements Action {
  type = ADD_LANE;

  constructor(public payload: Lane) {
  }
}
