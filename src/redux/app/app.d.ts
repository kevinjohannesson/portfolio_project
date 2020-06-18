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

export type AppActions = ToggleDarkMode | CollapseElement | setWorkspace; // | etc

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const TOGGLE_TOOLTAB_COLLAPSE = "TOGGLE_TOOLTAB_COLLAPSE";
export const SET_WORKSPACE = "SET_WORKSPACE";
