import React from "react";

const Square = (props) => {
  return (
    <div className='square' onClick={props.squareOnClick}>
      {props.value === "X" ? (
        <h1 className='player-x'>{props.value}</h1>
      ) : (
        <h1 className='player-o'>{props.value}</h1>
      )}
    </div>
  );
};

export default Square;
