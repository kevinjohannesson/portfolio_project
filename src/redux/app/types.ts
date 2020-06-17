import { Action } from "redux";

interface Sidebar {
  collapsed: boolean;
}

type Workspace = 'pages' | 'components';

export type AppState = {
  preferences: {
    dark_mode: boolean;
    sidebar_left: Sidebar;
    sidebar_right: Sidebar;
    workspace: Workspace;
  };
};

export type Element = 'sidebar_left' | 'sidebar_right';
interface CollapseElement extends Action {
  type: typeof TOGGLE_COLLAPSE;
  payload: Element;
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
export const TOGGLE_COLLAPSE = "TOGGLE_COLLAPSE";
export const SET_WORKSPACE = "SET_WORKSPACE";
