import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
  selectCounter,
} from "./redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);
  const [inputValue, setInputValue] = useState("");

  const zeroValue = Number(inputValue) || 0;

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const resetAll = () => {
    dispatch(reset());
    setInputValue("");
  };

  const incrementBy = () => {
    dispatch(incrementByAmount(zeroValue));
    setInputValue("");
  };

  const decrementBy = () => {
    dispatch(decrementByAmount(zeroValue));
    setInputValue("");
  };

  return (
    <CounterPage>
      <h1>{count}</h1>
      <input type="text" onChange={handleInputChange} value={inputValue} />{" "}
      <br />
      <div className="buttons">
        <div className="btn btn1">
          <button onClick={() => dispatch(decrement())}>Decrease</button>
          <button onClick={() => dispatch(increment())}>Increase</button>
        </div>
        <button onClick={resetAll} className="reset">
          Reset
        </button>
        <div className="btn btn2">
          <button onClick={decrementBy}>Decrease by Input</button>
          <button onClick={incrementBy}>Increase by Input</button>
        </div>
      </div>
    </CounterPage>
  );
};

const CounterPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  .btn {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .reset {
      background: red;
    }

    button {
      border: none;
      background: lightgray;
      color: white;
      padding: 1rem 3rem;
      border-radius: 0.5rem;
      transition: 500ms all ease;
      cursor: pointer;
      &:hover {
        background: gray;
        color: white;
      }
    }
  }
  input {
    width: fit-content;
    padding: 1rem;
    border-radius: 0.5rem;
    &:focus {
      border-bottom: 2px solid blue;
      border-top: 2px solid blue;
      outline: none;
    }
  }
`;
export default Counter;
