import { ADD_PAGE, ADD_NEW_COMPONENT, AddNewComponent, CHANGE_PAGE_TITLE, ChangePageTitle, AddPage, ADD_COMPONENT, AddComponent, SetCurrentPage, SET_CURRENT_PAGE, Page, CHANGE_ROW_INDEX, ChangeRowIndex, AddRow, ADD_ROW } from './project.d';

export function addPage(): AddPage {
  return {
    type: ADD_PAGE
  }
}

export function changePageTitle(page_id: number, title: string): ChangePageTitle {
  return {
    type: CHANGE_PAGE_TITLE,
    page_id,
    title
  }
}

export function setCurrentPage(page: Page): SetCurrentPage {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}


export function addComponent(): AddComponent {
  return {
    type: ADD_COMPONENT
  }
}

export function addNewComponent(component: any): AddNewComponent {
  return {
    type: ADD_NEW_COMPONENT,
    component
  }
}

export function changeRowIndex(prevIndex: number, newIndex: number): ChangeRowIndex {
  return {
    type: CHANGE_ROW_INDEX,
    prevIndex,
    newIndex,
  }
}

export function addRow(newIndex: number): AddRow {
  return {
    type: ADD_ROW,
    newIndex
  }
}
