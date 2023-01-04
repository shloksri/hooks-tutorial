import "./App.css";
// import HookCounter from "./components/HookCounter";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/HookCounterFour";
// import LifecycleA from "./LifecycleMethods/LifecycleA";
// import DataFetching from "./components/DataFetching";
// import ComponentC from "./Context/useContextHook/ComponentC";
// import CounterThree from "./Reducer/CounterThree";

import React, { useReducer } from "react";
import ComponentA from "./ContextAndReducer/ComponentA";
import ComponentB from "./ContextAndReducer/ComponentB";
import ComponentC from "./ContextAndReducer/ComponentC";

// Step 1: create a Counter in App.js using reducer
// Step 2: Provide and Consume Counter context in Components

export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  // now here, we need dispatch to be used in all other components

  return (
    <div>
      {/* counter will be here, and changed by A, D, F */}
      {/* A , B->D, C->E->F */}
      Count : {count}
      <CounterContext.Provider value={{ contextCount: count, contextDispatch: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
