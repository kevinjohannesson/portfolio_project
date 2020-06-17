import { AppState, AppActions, TOGGLE_DARK_MODE, TOGGLE_COLLAPSE, SET_WORKSPACE } from "./types";
import { initialState } from "./initial_state";

export default function reducer(
  state: AppState = initialState,
  action: AppActions
) {
  switch (action.type) {
    case TOGGLE_DARK_MODE: {
      return {
        ...state,
        preferences: {
          ...state.preferences,
          dark_mode: !state.preferences.dark_mode,
        },
      };
    }
    case TOGGLE_COLLAPSE: {
      return {
        ...state,
        preferences: {
          ...state.preferences,
          [action.payload]: {
            collapsed: !state.preferences[action.payload].collapsed,
          }
        },
      };
    }
    case SET_WORKSPACE: {
      return {
        ...state,
        preferences: {
          ...state.preferences,
          workspace: action.workspace
        }
      };
    }
    default: {
      return state;
    }
  }
}
