import React, { useState } from "react";
import Square from "./Square";
import Winner from "./Winner";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  function resetGame() {
    setSquares(Array(9).fill(null));

    console.log(squares);
  }

  const checkWinner = () => {
    const winnerPosibility = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winner of winnerPosibility) {
      const [a, b, c] = winner;
      if (
        squares[a] != null &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (squares[index] !== null) {
      return;
    }

    console.log("Clicked on index", index);
    const copySquares = [...squares];
    copySquares[index] = isXTurn ? "X" : "O";
    setSquares(copySquares);
    setIsXTurn(!isXTurn);
  };

  const checkGameOver = () => {
    if (isWinner || !squares.includes(null)) {
      return true;
    }
    return false;
  };

  const isGameOver = checkGameOver();

  return (
    <>
      {isGameOver ? (
        <>
          <h2 className='game-over'>Game Over</h2>
          {isWinner ? (
            <>
              <Winner winner={isWinner} />
            </>
          ) : (
            <h3>It's a draw</h3>
          )}
          <button className='button resetButton' onClick={() => resetGame()}>
            Play Again
          </button>
        </>
      ) : (
        <>
          <h2>
            Current Player:{" "}
            {isXTurn ? (
              <span className='player-x'>X</span>
            ) : (
              <span className='player-o'>O</span>
            )}
          </h2>
          <div className='board-container'>
            <div className='board-row'>
              <Square value={squares[0]} squareOnClick={() => handleClick(0)} />
              <Square value={squares[1]} squareOnClick={() => handleClick(1)} />
              <Square value={squares[2]} squareOnClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
              <Square value={squares[3]} squareOnClick={() => handleClick(3)} />
              <Square value={squares[4]} squareOnClick={() => handleClick(4)} />
              <Square value={squares[5]} squareOnClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
              <Square value={squares[6]} squareOnClick={() => handleClick(6)} />
              <Square value={squares[7]} squareOnClick={() => handleClick(7)} />
              <Square value={squares[8]} squareOnClick={() => handleClick(8)} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Board;
