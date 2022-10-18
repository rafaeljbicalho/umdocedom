// import logo from './logo.svg';
import logo from './img/umdocedom.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem-vindo ao site do @umdocedom
        </p>
        <a
          className="App-link"
          href="https://instagram.com/umdocedom"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nos visite no Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
