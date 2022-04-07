import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const coisas = ['Uma coisa', 'Duas coisas', 'Três coisas', 'Quatro coisas'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
        {coisas.map((coisa) => Task(coisa))}
        </ul>
      </header>
    </div>
  );
}

export default App;
