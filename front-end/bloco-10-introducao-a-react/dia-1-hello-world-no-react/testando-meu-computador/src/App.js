import logo from './logo.svg';
import './App.css';

const testJSX = 'Hello JSX';
const JSX = <h1>{testJSX}</h1>;

function tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  return element;
}

setInterval(tick, 1000);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSX}
        {tick()}
      </header>
    </div>
  );
}

export default App;
