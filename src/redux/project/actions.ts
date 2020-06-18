import { ADD_PAGE, CHANGE_PAGE_TITLE, ChangePageTitle, AddPage, ADD_COMPONENT, AddComponent, SetCurrentPage, SET_CURRENT_PAGE, Page } from './project.d';

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
