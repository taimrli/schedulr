import {GenericProperty} from "./generic-property";
import {Lane} from "./lane";
export interface Track {

  properties: GenericProperty[];
  inLanes: Lane[];

}
