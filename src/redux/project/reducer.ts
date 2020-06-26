import { initialState } from "./initial_state";
import { 
  ProjectState, 
  ProjectActions, 
  ADD_PAGE,
  Page,
  CHANGE_PAGE_TITLE,
  Component,
  SET_CURRENT_PAGE,
  CHANGE_ROW_INDEX,
  ADD_ROW, 
  CHANGE_NEW_COMPONENT_TAG,
  ChangeNewComponentTag,
  ChangeNewComponentValue,
  CHANGE_NEW_COMPONENT_VALUE,
  CREATE_NEW_ROW,
  FINISH_NEW_ROW,
  UPDATE_NEW_COMPONENT,
  SET_COMPONENT_CREATION,
  SetComponentCreation
} from "./project.d";

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
    
    case SET_CURRENT_PAGE: {
      return {...state, current_page: action.page.id}
    }

    case CHANGE_ROW_INDEX: {
      return {...state, pages: state.pages.map(page => {
        if(page.id !== state.current_page) return page;
        else{
          const rows = Array.from(page.layout.rows);
          const changedRow = page.layout.rows[action.prevIndex]
          
          rows.splice(action.prevIndex, 1);
          rows.splice(action.newIndex, 0, changedRow)
          
          const updatedPage = { ...page, layout: { ...page.layout, rows: rows}};
          return updatedPage
        }
      })}
    }

    case ADD_ROW: {
      console.log('action.newIndex', action.newIndex)
      return {...state, pages: state.pages.map(page => {
        if(page.id !== state.current_page) return page;
        else{
          const rows = Array.from(page.layout.rows);
          const newRow = state.new_row;
          rows.splice(action.newIndex, 0, newRow)
          
          const updatedPage = { ...page, layout: { ...page.layout, rows: rows}};
          return updatedPage
        }
      })}
    }

    case CHANGE_NEW_COMPONENT_TAG: {
      return {
        ...state, new_row: {
          ...state.new_row,
          tag: (action as ChangeNewComponentTag).tag
        }
      }
    }

    case CHANGE_NEW_COMPONENT_VALUE: {
      return {
        ...state, new_row: {
          ...state.new_row,
          value: (action as ChangeNewComponentValue).value
        }
      }
    }

    case CREATE_NEW_ROW: {
      return {
        ...state,
        isCreatingRow: 'in progress',
        new_row: {
          ...state.new_row,
          id: state.new_row.id + 1
        }
      }
    }
    case FINISH_NEW_ROW: {
      return {
        ...state,
        isCreatingRow: 'finished',
      }
    }

    case UPDATE_NEW_COMPONENT: {
      return {
        ...state,
        new_row: {
          ...state.new_row,
          tag: action.tag,
          value: action.value,
        }
      }
    }
    case SET_COMPONENT_CREATION: {
      return {
        ...state,
        isCreatingRow: (action as SetComponentCreation).value,
      }
    }

    default: {
      return state;
    }
  }
}

function editPage(state: ProjectState, page_id: number, edit_type: string, edit: string){
  return state;
  // return {...state, pages: state.pages.map(page=>{
  //   if(page.id !== page_id) return page;
  //   else {
  //     switch(edit_type){
  //       case CHANGE_PAGE_TITLE: {
  //         return {...page, title: edit };
  //       }
  //       case ADD_COMPONENT: {
  //         return {...page, components: [...page.components, createNewComponent(page.components) ]};
  //       }
  //       default: 
  //         return page;
  //     }
  //   } 
  // })}
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
    layout: {
      rows: [
        {
          id: 1,
          tag: 'h1',
          value: 'What is Lorem Ipsum?'
        },
        {
          id: 2,
          tag: 'p',
          value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: 3,
          tag: 'img',
          value: 'https://picsum.photos/500/300'
        }
      ]
    }
  }

  return page
}