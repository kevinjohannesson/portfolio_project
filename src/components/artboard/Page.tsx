import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Page as I_Page } from '../../redux/project/project.d';
import Container from './page/Container';
import Row from './page/Row';



interface Props {
  page: I_Page;
}


export default function Page({page}: Props): ReactElement {
  console.log(page.layout)
  return (
    <PAGE>
      <TITLE>{page.title}</TITLE>

      {/* <TITLE>
        { state.titleEdit ? 
          <input type="text" defaultValue={page.title} ref={ref} />
          : page.title
        }
        <FontAwesomeIcon icon={state.titleEdit ? faCheckSquare : faEdit} onClick={handleClick} style={{marginLeft: '1rem'}}/>
      </TITLE> */}

      <CONTENT>
        <Container>
          { 
            page.layout.rows.map((row, index)=> 
              <Row key={row.id} row={row} index={index}/>)
          }
        </Container>
      </CONTENT>
      
     {/* <Column rows={page.components}/> */}
    </PAGE>
  )
}

const PAGE = styled.div`
  width: 32rem;
  min-height: 24rem;
  
  background-color: white;
  box-shadow: 0px 0px 34px -13px rgba(0,0,0,0.75);

  color: black;

  margin: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  border-radius: 25px;

  position: relative;
`

const TITLE = styled.h2`
  width: 100%;
  height: 4rem;
  background-color: purple;
  border-radius: 25px 25px 0 0;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0;
  
  padding: 0.5rem;
`

const CONTENT = styled.div`
  border: 3px solid pink;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;


  align-self: stretch;
  flex: 1;
`


