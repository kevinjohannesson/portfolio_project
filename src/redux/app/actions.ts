import { TOGGLE_DARK_MODE, AppActions, Element, TOGGLE_COLLAPSE, SET_WORKSPACE } from './types';

export const toggleDarkMode = ( ) => {
  return {
    type: TOGGLE_DARK_MODE
  } as AppActions
}
export const toggleCollapse = ( element: Element ) => {
  return {
    type: TOGGLE_COLLAPSE,
    payload: element
  } as AppActions
}
export const setWorkspace = ( workspace: string ) => {
  return {
    type: SET_WORKSPACE,
    workspace
  } as AppActions
}

