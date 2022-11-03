
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="monitor">
          <div className="input-data">
            25*25
          </div>
          <div className="result">
            625
          </div>
        </section>
        <section className="input-button">
          <button className="numbers">7</button>
          <button className="numbers">8</button>
          <button className="numbers">9</button>
          <button className="symbols">/</button>
          <button className="numbers">4</button>
          <button className="numbers">5</button>
          <button className="numbers">6</button>
          <button className="symbols">*</button>
          <button className="numbers">1</button>
          <button className="numbers">2</button>
          <button className="numbers">3</button>
          <button className="symbols">-</button>
          <button className="numbers">.</button>
          <button className="numbers">0</button>
          <button className="symbols red">=</button>
          <button className="symbols">+</button>
        </section>
      </div>
    </div>
  );
}

export default App;
