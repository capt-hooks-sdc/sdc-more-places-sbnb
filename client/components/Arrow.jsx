import React from 'react';

import leftArrow from '../img/left-arrow.png';
import rightArrow from '../img/right-arrow.png';

const Arrow = ({ direction, click, }) => {
  const arrowStyle = {
    height: '20px',
    width: '20px'
  };
  const arrowCont = {
    paddingTop: '15px',
    paddingLeft: '10px'
  }

  return (
    <div
    className={ `arrow ${direction}` }
    onClick={click}
    style={arrowCont}
    >
    {direction === 'right' ? <img src={rightArrow} style={arrowStyle} /> :
      <img src={leftArrow} style={arrowStyle} /> }
    </div>
  )
};

export default Arrow;