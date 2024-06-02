import React from "react";

const Winner = (props) => {
  return (
    <div className='Winner'>
      <p>
        <strong>{props.winner}</strong> is the winner.
      </p>
    </div>
  );
};

export default Winner;
