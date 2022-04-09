import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="count">{count}</h1>
      </header>

      <div>
        <button data-testid="plus-button" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button data-testid="minus-button" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
