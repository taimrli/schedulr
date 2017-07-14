import {GenericProperty} from "./generic-property";
import {Lane} from "./lane";
import {Track} from "./track";
export interface SchedulrEvent {

  $key: string;
  name: string;
  properties: GenericProperty[];
  lanes: Lane[];
  tracks: Track[];

}
