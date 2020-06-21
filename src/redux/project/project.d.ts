export interface Component {
  id: number;
  tag: string;
  innerHTML: string;
  title?: string;
  src?: string;
  value?: string;
}

export interface Page {
  id: number;
  title: string;
  layout: Layout;
}

export interface Layout {
  rows: Row[];
}

export interface Row {
  id: number;
  tag: string;
  value: string;
}

export interface ProjectState {
  name: string;
  pages: Page[];
  current_page: number;
  current_component: number | null;
  new_row: Row;
  isCreatingRow: 'in progress' | 'finished' | 'idle';
}

export interface AddPage extends Action {
  type: typeof ADD_PAGE;
}

export interface SetCurrentPage extends Action {
  type: typeof SET_CURRENT_PAGE;
  page: Page;
}

export interface ChangePageTitle extends Action {
  type: typeof CHANGE_PAGE_TITLE;
  page_id: number;
  title: string;
}


export interface ChangeRowIndex extends Action {
  type: typeof CHANGE_ROW_INDEX;
  prevIndex: number;
  newIndex: number;
}


export interface AddRow extends Action {
  type: typeof ADD_ROW;
  newIndex: number;
}


export interface ChangeNewComponentTag extends Action {
  type: typeof CHANGE_NEW_COMPONENT_TAG;
  tag: string;
}

export interface ChangeNewComponentValue extends Action {
  type: typeof CHANGE_NEW_COMPONENT_VALUE;
  value: string;
}

export interface CreateNewRow extends Action {
  type: typeof CREATE_NEW_ROW;
}

export interface UpdateNewComponent extends Action {
  type: typeof UPDATE_NEW_COMPONENT;
  tag: string;
  value: string;
}

export interface FinishNewRow extends Action {
  type: typeof FINISH_NEW_ROW; 
}

export interface SetComponentCreation extends Action {
  type: typeof SET_COMPONENT_CREATION;
  value: ProjectState["isCreatingRow"];
}

export type ProjectActions = 
  addPage | 
  ChangePageTitle | 
  SetCurrentPage | 
  ChangeRowIndex | 
  AddRow | 
  ChangeNewComponentTag |
  ChangeNewComponentValue |
  CreateNewRow |
  FinishNewRow |
  UpdateNewComponent
  // | etc

export const ADD_PAGE = "ADD_PAGE";
export const CHANGE_PAGE_TITLE = "CHANGE_PAGE_TITLE";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const CHANGE_ROW_INDEX = "CHANGE_ROW_INDEX";
export const ADD_ROW = "ADD_ROW";

export const CHANGE_NEW_COMPONENT_TAG = "CHANGE_NEW_COMPONENT_TAG";
export const CHANGE_NEW_COMPONENT_VALUE = "CHANGE_NEW_COMPONENT_VALUE";
export const CREATE_NEW_ROW = "CREATE_NEW_ROW";
export const FINISH_NEW_ROW = "FINISH_NEW_ROW";


export const UPDATE_NEW_COMPONENT = "UPDATE_NEW_COMPONENT";
export const SET_COMPONENT_CREATION = "SET_COMPONENT_CREATION";