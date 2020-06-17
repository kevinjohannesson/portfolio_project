import { initialState } from "./initial_state";
import { ProjectState, ProjectActions, ADD_PAGE, Page, CHANGE_PAGE_TITLE } from "./project.d";

export default function reducer(
  state: ProjectState = initialState,
  action: ProjectActions
) {
  switch (action.type) {
    case ADD_PAGE: {
      return {...state, pages: [...state.pages, createNewPage(state.pages)]}
    }
    case CHANGE_PAGE_TITLE: {
      const newState = {...state, pages: state.pages.map(page => {
        if(page.id !== action.page_id) return page;
        else return {...page, title: action.title }
      })}
      return newState
    }
    default: {
      return state;
    }
  }
}

export function createNewPage(pages?: Page[]) {
  const page: Page = {
    id: pages ? pages.length : 0,
    title: 'new page',
    components: []
  }

  return page
}
