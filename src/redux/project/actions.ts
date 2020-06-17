import { ADD_PAGE, CHANGE_PAGE_TITLE, ChangePageTitle } from './project.d';
// import { ADD_PAGE, Page, CHANGE_PAGE_TITLE, ChangePageTitle } from './project.d';

export const addPage = ( page: any) => {
  return {
    type: ADD_PAGE,
    page
  }
}

export function changePageTitle(page_id: number, title: string): ChangePageTitle{
  return {
    type: CHANGE_PAGE_TITLE,
    page_id,
    title
  }
}