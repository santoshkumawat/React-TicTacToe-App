import React from "react";

const Winner = (props) => {
  return (
    <div className='Winner'>
      <h3>
        {props.winner === "X" ? (
          <>
            <span className='player-x'>{props.winner} is the winner.</span>
          </>
        ) : (
          <>
            <span className='player-o'>{props.winner} is the winner.</span>
          </>
        )}
      </h3>
    </div>
  );
};

export default Winner;
