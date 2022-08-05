import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import MagicEightBall from './Components/MagicEightBall';
import NavBar from './Components/NavBar';
import ToDoList from './Components/ToDoList';
import QuoteGenerator from './Components/QuoteGenerator';
import Cards from './Components/Cards';

function Template() {
    return ( <
        div className = "Template" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        /header> <
        /div>
    );
}

function App() {
    return ( <
        div className = "App" >
        <
        Cards / > {
            /*<QuoteGenerator />
                  {/* <Counter className="App-counter" />
                  <hr />
                  <MagicEightBall className="MagicEightBall" />
                  <hr />
                  <NavBar />
                  <hr />
                  <ToDoList /> */
        } <
        /div>
    );
}

export default App;