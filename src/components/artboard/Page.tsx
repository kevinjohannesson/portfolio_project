import React, { ReactElement, useReducer, useCallback, useRef } from 'react'
import styled from 'styled-components';
import { bgColor_1 } from '../../styling/main';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { changePageTitle } from '../../redux/project/actions';
import { useDispatch } from 'react-redux';

import { Page as I_Page } from '../../redux/project/project.d';

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

  return (
    <PAGE>
      <TITLE>
        { state.titleEdit ? 
          <input type="text" defaultValue={page.title} ref={ref} />
          : page.title
        }
        <FontAwesomeIcon icon={state.titleEdit ? faCheckSquare : faEdit} onClick={handleClick} style={{marginLeft: '1rem'}}/>
      </TITLE>
    </PAGE>
  )
}


const PAGE = styled.div`
  height: 250px;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0px 0px 34px -13px rgba(0,0,0,0.75);

  color: black;

  margin: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  flex: 0 0 auto; 
`

const TITLE = styled.h2`
  width: 100%;
  background-color: ${bgColor_1};
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  align-self: flex-start;

  margin: 0;
  padding: 0.5rem;


`


