import { Action } from "redux";

interface Sidebar {
  collapsed: boolean;
}

export type WorkspaceName = 'project' | 'pages' | 'components';

export type AppState = {
  preferences: {
    dark_mode: boolean;
    tooltab_collapsed: boolean;
    workspace: WorkspaceName;
  };
  workspaces: Workspace[];
  current_id: number;
};

interface Workspace {
  name: WorkspaceName;
}

interface CollapseToolTab extends Action {
  type: typeof TOGGLE_TOOLTAB_COLLAPSE;
}

interface setWorkspace extends Action {
  type: typeof SET_WORKSPACE;
  workspace: string;
}

interface ToggleDarkMode extends Action {
  type: typeof TOGGLE_DARK_MODE;
}

interface GenerateNewId extends Action {
  type: typeof GENERATE_NEW_ID;
}

export type AppActions = ToggleDarkMode | CollapseElement | setWorkspace | GenerateNewId; // | etc

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const TOGGLE_TOOLTAB_COLLAPSE = "TOGGLE_TOOLTAB_COLLAPSE";
export const SET_WORKSPACE = "SET_WORKSPACE";
export const GENERATE_NEW_ID = "GENERATE_NEW_ID";