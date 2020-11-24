import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Some <b>Dockerized</b> shit - alongside my boy, Travis CI!
        </p>
      </header>
    </div>
  );
}

export default App;
