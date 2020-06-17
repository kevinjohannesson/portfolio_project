import { AppState } from "./types";

export const initialState: AppState = {
  preferences: {
    workspace: 'pages',
    dark_mode: true,
    sidebar_left: {
      collapsed: false
    },
    sidebar_right: {
      collapsed: true
    }
  }
};
