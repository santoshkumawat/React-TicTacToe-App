import React from "react";

const Square = (props) => {
  return (
    <div className='square' onClick={props.squareOnClick}>
      <h1>{props.value}</h1>
    </div>
  );
};

export default Square;
