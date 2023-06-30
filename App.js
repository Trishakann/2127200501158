import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name:Train A<br></br>
          delay:on Time<br></br>
          price:$50<br></br>
          seats available:120<br></br>
        </p>
        <p>
          Name:train B <br></br>
          delay:5 mins<br></br>
          price:$100<br></br>
          seats available:120
        </p>
        <p>
          name:train c<br></br>
          delay:10 mins<br></br>
          price:$100<br></br>
          seats available:50
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
