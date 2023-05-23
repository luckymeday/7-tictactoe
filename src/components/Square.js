import React from "react";

function Square({ value, handleClick }) {
  return (
    <button className={value} onClick={handleClick}>
      {value}
      {/* why using onClick only here? */}
    </button>
  );
}

export default Square;
