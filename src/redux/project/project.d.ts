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
  components: Component[];
}

export interface ProjectState {
  name: string;
  pages: Page[];
  current_page: number;
  current_component: number | null;
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


export interface AddComponent extends Action {
  type: typeof ADD_COMPONENT;
}

export type ProjectActions = addPage | ChangePageTitle | SetCurrentPage | AddComponent// | etc

export const ADD_PAGE = "ADD_PAGE";
export const CHANGE_PAGE_TITLE = "CHANGE_PAGE_TITLE";
export const ADD_COMPONENT = "ADD_COMPONENT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";