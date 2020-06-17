import React from 'react'

import styled from 'styled-components'
import ConditionalWrapper from '../ConditionalWrapper';
import { icon_paths } from './all_icons';
import { Props } from './types';

const SVG = styled.svg`
    overflow: visible;

    circle {
      r: 0px;
      transition: r 0.4s ease;
    }

    &.active circle {
      r: 20px;
    }

    #stroke {
      transition: all 0.4s ease;
    }

    

    /* &:hover {
      #stroke {
        stroke: gold;
      }
    } */
  `
const BUTTON = styled.button`
  background-color: transparent;
  border: none;

  &:active {
    transform: scale(0.85)
  }

  &:focus {
    outline: none;
  }

`

export default function Icon( props: Props) {
  const clickHandler = () => {
    if( props.onClick ) props.onClick()
  }

  return (

    <ConditionalWrapper
      condition={props.onClick ? true : false}
      wrapper={ (children) => <BUTTON onClick={ clickHandler }>{children}</BUTTON>}
    >

      <SVG className={ props.active ? 'active' : undefined } id="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <title id="title">{ props.name } icon</title>
        
        <path 
          id="background"
          d={ icon_paths[ props.name ] } 
        />

        <defs>
          <clipPath id="clip">
            <path 
              id="shape"
              d={ icon_paths[ props.name ] }
            />
          </clipPath>
        </defs>

        <circle
          cx="50%" 
          cy="50%" 
          r="0"
          fill={ props.activeColor || 'gold' }

          clipPath="url(#clip)"
        />
        
        <path 
          id="stroke" 
          d={ icon_paths[ props.name ] } 
          fill={ props.activeColor || 'gold' }
          fillOpacity={ 1 } 
          strokeWidth={ props.strokeWidth } 
          stroke={ props.strokeColor }
        />

      </SVG>
    </ConditionalWrapper>
  )
}
