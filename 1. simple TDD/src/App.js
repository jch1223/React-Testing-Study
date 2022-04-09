import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="count">{count}</h1>

        <div>
          <button
            data-testid="plus-button"
            onClick={() => setCount(count + 1)}
            disabled={isDisabled}
          >
            +
          </button>
          <button
            data-testid="minus-button"
            onClick={() => setCount(count - 1)}
            disabled={isDisabled}
          >
            -
          </button>
        </div>

        <div>
          <button
            data-testid="on-off-button"
            style={{ backgroundColor: "red" }}
            onClick={() => setIsDisabled(!isDisabled)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
