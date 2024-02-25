import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import MagicEightBall from "./Components/MagicEightBall";
import NavBar from "./Components/NavBar";
import ToDoList from "./Components/ToDoList";
import QuoteGenerator from "./Components/QuoteGenerator";
import Cards from "./Components/Cards";
import CheckUserAge from "./Components/CheckUserAge";
import GameOfChance from "./Components/GameOfChance";
import GateKeeper from "./Components/GateKeeper";
import MyComponent from "./Components/MyComponent";

function Template() {
  return (
    <div className="Template">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Cards />
      <hr />
      <QuoteGenerator />
      <hr />
      <Counter className="App-counter" />
      <hr />
      <MagicEightBall className="MagicEightBall" />
      <hr />
      <NavBar />
      <hr />
      <ToDoList />
      <hr />
      <CheckUserAge />
      <hr />
      <GameOfChance />
      <hr />
      <GateKeeper />
      <hr />
      <MyComponent />
    </div>
  );
}

export default App;
