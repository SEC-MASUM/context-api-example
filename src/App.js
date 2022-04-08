import "./App.css";
import FirstComponent from "./Components/FirstComponent/FirstComponent";
import SecondComponent from "./Components/SecondComponent/SecondComponent";
import ThirdComponent from "./Components/ThirdComponent/ThirdComponent";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";

function App() {
  return (
    <div className="app">
      <div className="counter-container">
        <h1>App</h1>
        <div>
          <button title="Increase">
            <GrFormAdd size={20} />
          </button>
          <h1>Count:</h1>
          <button title="Decrease">
            <AiOutlineMinus size={20} />
          </button>
        </div>
      </div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;
