import React, { ReactElement, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'

interface Props {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: JSX.Element;
}

export default function Tooltip({text, position, children}: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.dir(ref.current)
    if(ref.current){
      ref.current.style.transform = `translateX(${-ref.current.offsetWidth/2}px)`
    }
    return () => {
      
    };
  }, []);

  return (
    <WRAPPER>
      <TOOLTIP ref={ref} className="tooltiptext">{text}</TOOLTIP>
      {children}
    </WRAPPER>
  )
}

const WRAPPER = styled.div`
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */

  &:hover .tooltiptext {
    visibility: visible;
  }
`

const TOOLTIP = styled.div`

  font-size: 1rem;
  display: inline-block;
  /* border-bottom: 1px dotted black; */

  visibility: hidden;
  /* width: 120px; */
  background-color: darkgray;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 6px;

 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;

  top: 100%;
  left: 50%;

  white-space: nowrap;
  
`




// <style>
// /* Tooltip container */
// .tooltip {
//   position: relative;
//   display: inline-block;
//   border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
// }

// /* Tooltip text */
// .tooltip .tooltiptext {
//   visibility: hidden;
//   width: 120px;
//   background-color: black;
//   color: #fff;
//   text-align: center;
//   padding: 5px 0;
//   border-radius: 6px;
 
//   /* Position the tooltip text - see examples below! */
//   position: absolute;
//   z-index: 1;
// }

// /* Show the tooltip text when you mouse over the tooltip container */
// .tooltip:hover .tooltiptext {
//   visibility: visible;
// }
// </style>

// <div class="tooltip">Hover over me
//   <span class="tooltiptext">Tooltip text</span>
// </div>