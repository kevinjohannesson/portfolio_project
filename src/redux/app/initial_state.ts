import { AppState } from "./app.d";

export const initialState: AppState = {
  preferences: {
    workspace: 'components',
    dark_mode: true,
    tooltab_collapsed: false,
  },
  workspaces: [
    {
      name: 'project'
    },
    {
      name: 'pages'
    },
    {
      name: 'components'
    },
  ]
};
