import { ProjectState } from "./project.d";
import { createNewPage } from "./reducer";

export const initialState: ProjectState = {
  name: 'untitled project',
  pages: [ createNewPage() ],
  current_page: 0, // id
  current_component: 1, // id
  new_row: {
    id: 4,
    tag: 'h2',
    value: 'This is a new heading.'
  }
};