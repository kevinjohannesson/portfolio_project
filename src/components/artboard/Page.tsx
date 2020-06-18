import React, { ReactElement, useReducer, useCallback, useRef } from 'react'
import styled from 'styled-components';
// import { bgColor_1 } from '../../styling/main';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { changePageTitle, addComponent, setCurrentPage } from '../../redux/project/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Page as I_Page } from '../../redux/project/project.d';
import { getCurrentPageID } from '../../redux/project/selectors';
import Tooltip from '../tooltip/Tooltip';

interface Props {
  page: I_Page;
}

interface State {
  titleEdit: boolean;
}

const initialState = {
  titleEdit: false
};

const EDIT_TITLE = "EDIT_TITLE";
const SAVE_TITLE ="SAVE_TITLE";

function reducer(state: State, action:any) {
  switch (action.type) {
    case EDIT_TITLE: {
      return {...state, titleEdit: true};
    }
    case SAVE_TITLE: {
      return {...state, titleEdit: false};
    }
    default:
      throw new Error();
  }
}

export default function Page({page}: Props): ReactElement {
  const ref = useRef<HTMLInputElement>(null);


  const currentPageID = useSelector(getCurrentPageID);
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);

  const handleClick = useCallback( (event) => {
    if(state.titleEdit) {
      localDispatch({type: SAVE_TITLE});
      const title = ref.current ? ref.current.value : page.title;
      dispatch(changePageTitle(page.id, title));
    }
    else localDispatch({type: EDIT_TITLE});
  }, [dispatch, state, page]);


  const addNewComponent = useCallback( (event) => {
    console.log('addNewComponent')
    dispatch(addComponent());
  }, [dispatch]);

  return (
    <PAGE onMouseDown={()=>{if(currentPageID !== page.id) dispatch(setCurrentPage(page))}}>
      <TITLE>
        { state.titleEdit ? 
          <input type="text" defaultValue={page.title} ref={ref} />
          : page.title
        }
        <FontAwesomeIcon icon={state.titleEdit ? faCheckSquare : faEdit} onClick={handleClick} style={{marginLeft: '1rem'}}/>
      </TITLE>
      <COMPONENTS_WRAPPER>
        {page.components.map((component,index)=><COMPONENT key={index}/>)}
        <NEW_COMPONENT>
          <Tooltip text="add row">
            <FontAwesomeIcon icon={faPlusSquare} onClick={addNewComponent}/>
          </Tooltip>
        </NEW_COMPONENT>
      </COMPONENTS_WRAPPER>
      
    </PAGE>
  )
}



const COMPONENTS_WRAPPER = styled.div`
  width: 100%;
  height: 100%;
  /* border: 3px solid green; */

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  /* overflow: auto; */
`

const COMPONENT = styled.div`
  width: 100%;
  height: 5rem;
  border: 3px solid darkgray;
  border-radius: 1rem;

  flex: 0 0 auto;

  margin: 0.25rem 0;

`

const NEW_COMPONENT = styled.div`
  width: 100%;
  height: 5rem;

  border: 3px dashed lightgray;
  border-radius: 1rem;

  font-size: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  svg {
    color: lightgray;
  }
`

const PAGE = styled.div`
  width: 32rem;
  min-height: 24rem;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0px 0px 34px -13px rgba(0,0,0,0.75);

  color: black;

  margin: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;
`

const TITLE = styled.h2`
  width: 100%;
  height: 4rem;
  background-color: purple;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  align-self: flex-start;

  margin: 0;
  
  padding: 0.5rem;
`


