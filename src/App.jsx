import './App.css';
import {useState} from "react";
import SideMenu from "./components/SideMenu";
import Info from "./components/InfoContainer";
import {func} from "prop-types";


function App() {
    const [message, setMessage] = useState('');
    const messageOptions = [
        'You have been eaten by Goblin... Try again!',
        'You have lost all the gold you had... Try again!',
        'You faced a wall - no way forward... Turn around and Try again!',
        'Congratulations... You got the treasure!'
    ]
    const changeMessage = function () {
        setMessage(messageOptions[Math.floor(Math.random() * 4)])
        return setMessage
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src='/1.png' className="App-logo" alt="logo"/>
                <h1> WELCOME TO UNKNOWN...</h1>
            </header>
            <SideMenu func={changeMessage}/>
            <Info message={message}/>
        </div>

    );
}

export default App;
