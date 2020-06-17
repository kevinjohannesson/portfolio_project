import { ProjectState } from "./project.d";
import { createNewPage } from "./reducer";

export const initialState: ProjectState = {
  name: 'untitled',
  pages: [ createNewPage() ]
};