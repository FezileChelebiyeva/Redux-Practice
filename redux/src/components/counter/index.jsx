import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  incrementByInputValueAction,
  inputValueAction,
} from "../../redux/action/counter.action";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const inputValue = useSelector((state) => state.counterReducer.inputValue);
  const dispacth = useDispatch();
  return (
    <div>
      <div style={{ display: "flex" }} className="btn">
        <button onClick={() => dispacth(incrementAction())}>Increment</button>
        <button onClick={() => dispacth(decrementAction())}> Decrement</button>
      </div>
      <h2>{count}</h2>
      <form
        style={{ marginTop: "20px" }}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => dispacth(inputValueAction(e.target.value))}
          type="number"
        />
        <div className="btn">
          <button
            onClick={() => dispacth(incrementByInputValueAction(inputValue))}
            style={{ marginTop: "20px" }}
          >
            Increment By Input Value
          </button>
        </div>
      </form>
    </div>
  );
};

export default Counter;
