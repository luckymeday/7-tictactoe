import React from "react";

function Square({ value, handleClick }) {
  return (
    <button className={value} onClick={handleClick}>
      {value}
      {/* Question: Why using onClick only here? */}
      {/* Question: Why making an extra Square component? Isn't it repetitive with Board component? 
      Cuz looks like there is no additinal function on this Square component. */}
    </button>
  );
}

export default Square;
