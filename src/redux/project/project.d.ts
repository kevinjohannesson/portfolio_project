export interface Component {
  tag: string;
  innerHTML: string;
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
}

export interface AddPage extends Action {
  type: typeof ADD_PAGE;
}

export interface ChangePageTitle extends Action {
  type: typeof CHANGE_PAGE_TITLE;
  page_id: number;
  title: string;
}

export type ProjectActions = addPage | ChangePageTitle; // | etc

export const ADD_PAGE = "ADD_PAGE";
export const CHANGE_PAGE_TITLE = "CHANGE_PAGE_TITLE";