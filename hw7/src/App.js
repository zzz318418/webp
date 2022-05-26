//import logo from './logo.svg';
import './App.css';
//import SignIn from './SignIn';
import login from './components/login'
import username from './components/username'
import password from './components/password'
import botton from './components/botton'
function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );*/
  /*return(
    <SignIn></SignIn>
  );*/
  return(
    <div>
        <div> {login()} </div>
        <div> {username()} </div>
        <div> {password()} </div>
        <div> {botton()} </div>
    </div>
  );
}

export default App;
