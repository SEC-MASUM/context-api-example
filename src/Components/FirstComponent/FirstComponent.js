import React, { useContext } from "react";
import FirstComponentChild from "../FirstComponentChild/FirstComponentChild";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { CountContext } from "../../App";

const FirstComponent = () => {
  const [count, setCount] = useContext(CountContext);

  console.log(count);
  return (
    <div className="first-component">
      <div className="counter-container">
        <h1>First Component</h1>
        <div>
          <button title="Increase" onClick={() => setCount(count + 1)}>
            <GrFormAdd size={20} />
          </button>
          <h1>Count: {count}</h1>
          <button title="Decrease" onClick={() => setCount(count - 1)}>
            <AiOutlineMinus size={20} />
          </button>
        </div>
      </div>
      <FirstComponentChild />
    </div>
  );
};

export default FirstComponent;
