import { State } from "../types";
import { Element } from "./types";

export const isDarkMode = (state: State) => state.App.preferences.dark_mode;

export const isCollapsed = (element: Element) => (state: State ) => state.App.preferences[element].collapsed; 

export const getWorkspace = (state: State) => state.App.preferences.workspace;