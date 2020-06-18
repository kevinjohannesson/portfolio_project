import { State } from "../types";

export const getPages = (state: State) => state.Project.pages;

export const getCurrentPageID = (state: State) => state.Project.current_page;

export const getPageByID = (id: number) => (state: State) => state.Project.pages.find(page=>page.id === id);

export const getProject = (state: State) => state.Project;

export const getCurrentComponentID = (state: State) => state.Project.current_component;

export const getComponentByID = (id: number) => (state: State) => state.Project.pages.find(page=>page.id === id);

export const getCurrentPage = (state: State) => {
  const id = getCurrentPageID(state);
  const page = getPageByID(id)(state);
  return page;
}

export const getCurrentComponent = (state: State) => {
  const currentPage = getCurrentPage(state);
  if(currentPage){
    const id = getCurrentComponentID(state);
    const component = currentPage.components.find(component => component.id === id)
    return component;
  } 
}