import React, { useContext } from "react";
import { CounterContext } from "../App";

function ComponentA() {
  const CountContext = useContext(CounterContext);

  return (
    <div>
      <div>Count in A: {CountContext.contextCount}</div>
      <button onClick={() => CountContext.contextDispatch("increment")}>Increment</button>
      <button onClick={() => CountContext.contextDispatch("decrement")}>Decrement</button>
      <button onClick={() => CountContext.contextDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;
