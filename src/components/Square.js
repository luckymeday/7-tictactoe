import React from "react";

function Square({ value, handleClick }) {
  return (
    <button className={value} onClick={handleClick}>
      "Your code here"
    </button>
  );
}

export default Square;
