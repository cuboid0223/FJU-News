import React from 'react';

function Question(props){
  return(
    <div>
        <p>{props.q}</p>
        <p>{props.a}</p>
    </div>
  )
  }

export default Question