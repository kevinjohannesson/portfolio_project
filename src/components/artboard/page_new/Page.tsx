import React, { ReactElement, useRef } from 'react'
import styled from 'styled-components'
import { Page as PageInterface } from '../../../redux/project/project'
import { Droppable } from 'react-beautiful-dnd';
import Row from '../page_new/Row';


interface Props {
  page: PageInterface;  
}

export default function Page({page}: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  
  const rows = page.layout.rows;
  
  return (
    <PAGE ref={ref}>
      <TITLE>pagetitle</TITLE>
      <CONTENT>
      <Droppable droppableId={'CONTAINER'}>
          {
            (provided, snapshot) => {
              //@ts-ignore
              // console.log(provided.placeholder?.props.on?.client.borderBox)
              //@ts-ignore
              // const borderBox = provided.placeholder?.props.on?.client.borderBox;
              // // console.log(borderBox)

              // console.dir(ref.current?.offsetHeight)

              // const height = ( borderBox && ref.current && snapshot.draggingOverWith === "NEW_COMPONENT") ? borderBox.height + ref.current.offsetHeight : ref.current ? ref.current.offsetHeight : 'auto';
              // const newComponent = snapshot.draggingOverWith === "NEW_COMPONENT";
              return (
    
                <CONTAINER
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  
                >
                {
                  rows.map((row, index)=>
                    <Row key={row.id} row={row} index={index}>
                      <>
                        <TAG>
                          {row.tag}
                        </TAG>
                        {row.value}
                      </>
                    </Row>)
                }
                {provided.placeholder}
                {/* <div style={{ display: newComponent ? 'none' : '' }}>{provided.placeholder}</div> */}
                </CONTAINER>
          
      
            )}
          }
        </Droppable>
      </CONTENT>
    </PAGE>
  )
}

const PAGE = styled.div`
  background-color: white;
  color: black;

  border-radius: 25px;
`

const TITLE = styled.h2`
  margin: 0;
  height: 3rem;

  background-color: orange;
  color: white;

  align-self: stretch;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 25px 25px 0 0;
`

const CONTENT = styled.div`

  width: 32rem;
  min-height: 24rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CONTAINER = styled.div`
  /* border: 2px solid green; */
  width: 70%;
`
const TAG = styled.div`
  background-color: lightgray;
  border-right: darkgray;
  margin-right: 1rem;
  padding: 0.25rem 0.75rem; 

  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* display: inline-flex; */
`

// <Droppable droppableId={'CONTAINER'}>
//           {
//             (provided, snapshot) => {
//               //@ts-ignore
//               // console.log(provided.placeholder?.props.on?.client.borderBox)
//               //@ts-ignore
//               const borderBox = provided.placeholder?.props.on?.client.borderBox;
//               // console.log(borderBox)

//               console.dir(ref.current?.offsetHeight)

//               const height = ( borderBox && ref.current && snapshot.draggingOverWith === "NEW_COMPONENT") ? borderBox.height + ref.current.offsetHeight : ref.current ? ref.current.offsetHeight : 'auto';
//               const newComponent = snapshot.draggingOverWith === "NEW_COMPONENT";
//               return (
    
//                 <CONTAINER
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
                  
//                 >
//                 {
//                   rows.map((row, index)=>
//                     <Row key={row.id} row={row} index={index}>{row.value}</Row>)
//                 }
//                 {provided.placeholder}
//                 {/* <div style={{ display: newComponent ? 'none' : '' }}>{provided.placeholder}</div> */}
//                 </CONTAINER>
          
      
//             )}
//           }
//         </Droppable>