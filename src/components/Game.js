import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  // const [history, setHistory] = useState(null)

  //Declaring a Winner
  useEffect(() => {
    "Your code here";
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] // why this logic.. dont't understand
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    const newSquares = squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
      //if there is a winner or the square is already occupied, click unavailable
    }
    newSquares[i] = xIsNext ? "X" : "O";
  };

  //Restart game
  const handleRestart = () => {
    "Your code here";
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <button onClick={handleRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
