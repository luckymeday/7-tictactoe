import React from "react";

function Square({ value, handleClick }) {
  return (
    <button className={value} onClick={handleClick}>
      {value}
      {/* handleClick or onClick? */}
    </button>
  );
}

export default Square;
