import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function handlleButtonClickAdd() {
    setCounter(counter + 1);
  }
  function handlleButtonClickSoustract() {
    if(counter!==0){
      setCounter(counter - 1);
    }
     else window.alert("you are already on 0");
    
  }
  function handlleButtonClickReset() {
    if(counter!==0){
      setCounter(0);
    }
    else window.alert("you are already on 0");
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1 style={{  fontSize: "5rem"}}>{counter}</h1>
      <div className="buttons">
        <button onClick={() => handlleButtonClickAdd()}>+</button>
        <button onClick={() => handlleButtonClickSoustract()}>-</button>
        <button onClick={() => handlleButtonClickReset()}>0</button>
      </div>
    </div>
  );
}

export default App;
