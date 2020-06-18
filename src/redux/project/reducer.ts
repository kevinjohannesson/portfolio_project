import { initialState } from "./initial_state";
import { ProjectState, ProjectActions, ADD_PAGE, Page, CHANGE_PAGE_TITLE, ADD_COMPONENT, Component, SET_CURRENT_PAGE } from "./project.d";

export default function reducer(
  state: ProjectState = initialState,
  action: ProjectActions
) {
  switch (action.type) {
    case ADD_PAGE: {
      return {...state, pages: [...state.pages, createNewPage(state.pages)]}
    }
    case CHANGE_PAGE_TITLE: {
      return editPage(state, state.current_page, CHANGE_PAGE_TITLE, action.title)
    }
    case ADD_COMPONENT: {
      return editPage(state, state.current_page, ADD_COMPONENT, 'hallo')
    }
    case SET_CURRENT_PAGE: {
      return {...state, current_page: action.page.id}
    }
    default: {
      return state;
    }
  }
}

function editPage(state: ProjectState, page_id: number, edit_type: string, edit: string){
  return {...state, pages: state.pages.map(page=>{
    if(page.id !== page_id) return page;
    else {
      switch(edit_type){
        case CHANGE_PAGE_TITLE: {
          return {...page, title: edit };
        }
        case ADD_COMPONENT: {
          return {...page, components: [...page.components, createNewComponent(page.components) ]};
        }
        default: 
          return page;
      }
    } 
  })}
}

export function createNewComponent(components?: Component[]) {
  const component: Component = {
    id: components ? components.length : 0,
    tag: 'h1',
    innerHTML: 'new heading',
  }

  return component;
}

export function createNewPage(pages?: Page[]) {
  const page: Page = {
    id: pages ? pages.length : 0,
    title: 'new page',
    components: []
  }

  return page
}
