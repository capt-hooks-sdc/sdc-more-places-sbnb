import React from 'react';
import styled from 'styled-components';

const ArrowStyle = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: white;
    border-color: gray;
    border-style: solid;
    border-width: thin;
    cursor: pointer;
    outline: 0;
    box-shadow: 0px 5px 5px rgb(211,211,211);
    &:hover {
      background-color: gray;
      box-shadow: 0 0 10px rgb(211,211,211);
    }
`

const Arrow = ({ direction, click, }) => {

  const arrowCont = {
    paddingTop: '10px',
    paddingLeft: '10px'
  }

  return (
    <div
    className={ `arrow ${direction}` }
    style={arrowCont}
    >
    {direction === 'right' ? <ArrowStyle type='button' onClick={click}>{'>'}</ArrowStyle> :
      <ArrowStyle type='button' onClick={click} >{'<'}</ArrowStyle> }
    </div>
  )
};

export default Arrow;