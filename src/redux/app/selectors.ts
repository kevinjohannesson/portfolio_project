import { State } from "../types";

export const isDarkMode = (state: State) => state.App.preferences.dark_mode;

export const isTooltabCollapsed = (state: State ) => state.App.preferences.tooltab_collapsed;

export const getWorkspace = (state: State) => state.App.preferences.workspace;

export const getWorkspaces = (state: State) => state.App.workspaces;