import React from 'react';

const characters = props => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid black'
  }
  return (
    <div>
      <p style={style} onClick={props.click}>{props.character}, {props.ind}</p>
    </div>
  )
}

export default characters;