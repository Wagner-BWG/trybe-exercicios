import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

const testJSX = 'Hello JSX';
const JSX = <h1>{testJSX}</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSX}
        {Clock}
      </header>
    </div>
  );
}

export default App;
