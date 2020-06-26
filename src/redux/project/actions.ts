import { 
  ADD_PAGE, 
  CHANGE_PAGE_TITLE,
   ChangePageTitle,
    AddPage,
     SetCurrentPage,
      SET_CURRENT_PAGE,
       Page,
        CHANGE_ROW_INDEX,
         ChangeRowIndex,
          AddRow,
           ADD_ROW,
            ChangeNewComponentTag,
             CHANGE_NEW_COMPONENT_TAG,
              CHANGE_NEW_COMPONENT_VALUE,
               ChangeNewComponentValue,
                CreateNewRow,
                 CREATE_NEW_ROW,
                  UpdateNewComponent,
                   UPDATE_NEW_COMPONENT,
                    FinishNewRow,
                     FINISH_NEW_ROW,
                      ProjectState,
                       SET_COMPONENT_CREATION,
                        SetComponentCreation 
                      } from './project.d';

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

export function changeNewComponentValue(value: string): ChangeNewComponentValue {
  return {
    type: CHANGE_NEW_COMPONENT_VALUE,
    value
  }
}

export function createNewRow(): CreateNewRow {
  return {
    type: CREATE_NEW_ROW
  }
}

export function updateNewComponent(tag: string, value: string): UpdateNewComponent {
  return {
    type: UPDATE_NEW_COMPONENT,
    tag, value
  }
}

export function finishNewRow(): FinishNewRow {
  return {
    type: FINISH_NEW_ROW
  }
}

export function setComponentCreation(value: ProjectState["isCreatingRow"]): SetComponentCreation {
  return {
    type: SET_COMPONENT_CREATION,
    value
  }
}
