import { ADD_PAGE, CHANGE_PAGE_TITLE, ChangePageTitle, AddPage } from './project.d';

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