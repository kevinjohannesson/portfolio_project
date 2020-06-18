import { ProjectState } from "./project.d";
import { createNewPage } from "./reducer";

export const initialState: ProjectState = {
  name: 'untitled project',
  pages: [ createNewPage() ],
  current_page: 0,
  current_component: null,
};