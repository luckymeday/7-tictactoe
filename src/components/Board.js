import React, { useState } from "react";
import Square from "./Square";

function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square value={squares[0]} onclick={() => handleClick(0)} />
          <Square value={squares[1]} onclick={() => handleClick(1)} />
          <Square value={squares[2]} onclick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onclick={() => handleClick(3)} />
          <Square value={squares[4]} onclick={() => handleClick(4)} />
          <Square value={squares[5]} onclick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onclick={() => handleClick(6)} />
          <Square value={squares[7]} onclick={() => handleClick(7)} />
          <Square value={squares[8]} onclick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default Board;
