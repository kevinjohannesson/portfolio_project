import React, { ReactElement } from 'react';

interface Props {
  empty?: any;
}

export default function ComponentTools({ empty}: Props): ReactElement {
  
  return (
    <div>
      <h1>Component Tools</h1>
    </div>
  )
}
