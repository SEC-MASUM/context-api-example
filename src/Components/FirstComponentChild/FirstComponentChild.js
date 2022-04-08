import React from "react";

import { GrFormAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
const FirstComponentChild = () => {
 
  return (
    <div className='first-component-child'>
      <div className='counter-container'>
        <h1>First Component Child</h1>
        <div>
          <button title='Increase'>
            <GrFormAdd size={20} />
          </button>
          <h1>Count: </h1>
          <button title='Decrease'>
            <AiOutlineMinus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstComponentChild;
