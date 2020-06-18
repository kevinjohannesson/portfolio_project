import React, { ReactElement } from 'react'

interface Props {
  empty?: any;
}

export default function Titlebar({empty}: Props): ReactElement {
  return (
    <div>
      project name &gt; current page name &gt; current component
    </div>
  )
}
