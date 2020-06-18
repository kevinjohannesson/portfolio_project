import { AppState } from "./app.d";

export const initialState: AppState = {
  preferences: {
    workspace: 'pages',
    dark_mode: true,
    tooltab_collapsed: true,
  },
  workspaces: [
    {
      name: 'pages'
    },
    {
      name: 'components'
    }
  ]
};
