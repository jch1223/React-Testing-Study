import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="count">0</h1>
      </header>

      <div>
        <button data-testid="plus-button">+</button>
        <button data-testid="minus-button">-</button>
      </div>
    </div>
  );
}

export default App;
