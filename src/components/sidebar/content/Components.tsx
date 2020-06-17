import React, { ReactElement } from 'react'

interface Props {
  empty?: any; 
}

export default function Components({empty}: Props): ReactElement {
  return (
    <div>
      stuff for components here...
    </div>
  )
}
