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




export type ProjectActions = addPage | ChangePageTitle | SetCurrentPage | ChangeRowIndex | AddRow// | etc

export const ADD_PAGE = "ADD_PAGE";
export const CHANGE_PAGE_TITLE = "CHANGE_PAGE_TITLE";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const CHANGE_ROW_INDEX = "CHANGE_ROW_INDEX";
export const ADD_ROW = "ADD_ROW";

export const CHANGE_NEW_COMPONENT_TAG = "CHANGE_NEW_COMPONENT_TAG";