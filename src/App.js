import logo from './img/umdocedom.jpg';
import './App.css';
import Icons from './components/Icons/Icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Icons />
      </header>
    </div>
  );
}

export default App;
