import React, { useCallback } from 'react';
import './App.css';
// import IconBar from './components/sidebar/iconbar/IconBar';
import Navbar from './components/navbar/Navbar';
import Artboard from './components/artboard/Artboard';
import ThemeWrapper from './components/ThemeWrapper';
import styled from 'styled-components';
import { textColor, bgColor_1, bgColor_2, bgColor_3, bgColor_4 } from './styling/main';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTooltabCollapse } from './redux/app/actions';
import { isTooltabCollapsed } from './redux/app/selectors';
import Toolbox from './components/toolbox/Toolbox';
import Tooltab from './components/tooltab/Tooltab';
import { DragDropContext } from 'react-beautiful-dnd';
import { changeRowIndex, addRow, finishNewRow } from './redux/project/actions';

function App() {
  
  const dispatch = useDispatch();

  const tooltabCollapsed = useSelector(isTooltabCollapsed);
  
  const collapseTooltab = useCallback( (event) => {
    dispatch(toggleTooltabCollapse())
  }, [dispatch]);

  function handleDragEnd(result: any){
    console.log('DragEnd')
    console.log(result)


    const {destination, source } = result;
    if(!destination){
      return;
    }
  
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    if ( destination.droppableId === source.droppableId) {
      const prevIndex = source.index;
      const newIndex = destination.index;
      dispatch(changeRowIndex(prevIndex, newIndex));
    } 
    else {
      console.log('halloooo')
      const newIndex = destination.index;
      dispatch(addRow(newIndex));
      dispatch(finishNewRow());
    }
  }

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
    >
      <ThemeWrapper>
        <WRAPPER>
          <HEADER>
            <Navbar />
          </HEADER>
          <WORKSPACE> 
            <TOOLBOX>
              <Toolbox/>
            </TOOLBOX>
            <TOOLTAB_WRAPPER>
              <TOOLTAB 
                initial={false}
                animate={tooltabCollapsed ? "closed" : "open"}
                variants={tooltabVariants}
                transition={{ type: "spring", stiffness: 75, damping: 12 }}
              >
                <Tooltab />
                <TOOLTAB_TOGGLE onClick={collapseTooltab}/>
              </TOOLTAB>
            </TOOLTAB_WRAPPER>
            <Artboard />
          </WORKSPACE>
        </WRAPPER>
      </ThemeWrapper>
    </DragDropContext>
  );
}

export default App;

const WRAPPER = styled.div`
  height: 100%;
  width: 100%;

  /* border: 3px solid green; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${bgColor_1};
  color: ${textColor};
`;

const HEADER = styled.div`
  height: 3rem;
  width: 100%;

  background-color: ${bgColor_2};
  /* border: 3px solid red; */
`;

const WORKSPACE = styled.div`
  height: 100%;
  width: 100%;

  /* border: 3px solid gray; */

  display: flex;

  position: relative;
`

const TOOLBOX = styled.div`
  height: 100%;
  width: 3rem;

  /* border: 3px solid gold; */

  align-self: flex-start;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  z-index: 1;

  background-color: ${bgColor_3};
`

const TOOLTAB_WRAPPER = styled.div`
  /* border: 3px solid silver; */
  max-width: 0;
  overflow: visible;
  position: relative;
`

const tooltabVariants = {
  open: { x: 0 },
  closed: { x: "-18rem" },
}

const TOOLTAB = styled(motion.div)`
  height: 100%;
  width: 20rem;

  /* border: 3px solid blue; */

  background-color: ${bgColor_4};

  position: absolute;
  left: -1rem;

  padding: 1.25rem;
  padding-left: 2.25rem;
`

const width = {unit: 'rem', amount: 0.5};
const height = {unit: 'rem', amount: 5};
const TOOLTAB_TOGGLE = styled.div`
  height: ${height.amount+height.unit};
  width: ${width.amount+width.unit};

  border-radius: ${width.amount/2+width.unit};

  position: absolute;
  top: calc(50% - ${height.amount/2+height.unit});
  right: ${width.amount/2+width.unit};

  background-color: ${bgColor_3};
  transform: scale(1);

  cursor: pointer;
`