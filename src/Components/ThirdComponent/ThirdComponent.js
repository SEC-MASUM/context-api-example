import React, { useContext } from "react";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
import { CountContext } from "../../App";

const ThirdComponent = () => {
  const [count, setCount] = useContext(CountContext);
  return (
    <div className="third-component">
      <div className="counter-container">
        <h1>Third Component</h1>
        <div>
          <button title="Increase">
            <GrFormAdd size={20} onClick={() => setCount(count + 1)} />
          </button>
          <h1>Count: {count}</h1>
          <button title="Decrease">
            <AiOutlineMinus size={20} onClick={() => setCount(count - 1)} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
