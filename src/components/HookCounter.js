import React, { useState } from "react";

function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(0);

  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      console.log("count: ", count);
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count} <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>decrement</button>
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={increment5}>Inc 5</button>
    </div>
  );
}

export default HookCounter;
