import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { BsHandIndexThumb } from "react-icons/bs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <header className="clicker">
        <h1 className="heading">
          <BsHandIndexThumb /> Clicker
        </h1>
      </header>
      <div className="count-box-main text-center mt-5">
        <div className="count-box pb-5 mt-5">
          <h1 style = {{fontSize : "4em"}}>{count}</h1>
        </div>
        <button className="increment btn-success p-4" onClick={increment}>
          +
        </button>
        <button className="reset btn-warning p-4" onClick={reset}>
          <GrPowerReset />
        </button>
        <button className="decrement btn-danger p-4" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default App;
