import { ADD_PAGE, CHANGE_PAGE_TITLE, ChangePageTitle, AddPage, SetCurrentPage, SET_CURRENT_PAGE, Page, CHANGE_ROW_INDEX, ChangeRowIndex, AddRow, ADD_ROW, ChangeNewComponentTag, CHANGE_NEW_COMPONENT_TAG } from './project.d';

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

export function changeNewComponentTag(tag: string): ChangeNewComponentTag {
  return {
    type: CHANGE_NEW_COMPONENT_TAG,
    tag
  }
}
