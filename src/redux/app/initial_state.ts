import { AppState } from "./app.d";

export const initialState: AppState = {
  preferences: {
    workspace: 'project',
    dark_mode: true,
    tooltab_collapsed: true,
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
