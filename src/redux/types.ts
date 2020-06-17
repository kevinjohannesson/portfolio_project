import { compose } from "redux";
import { AppState } from "./app/types";
import { ProjectState } from './project/project.d';

export type State = {
  App: AppState;
  Project: ProjectState;
};

export interface DevTools {
  __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
}
