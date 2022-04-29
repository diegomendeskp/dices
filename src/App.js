import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
function App() {
  const [dices, setDices] = useState([])
useEffect(() => {
    axios.get('https://murmuring-fortress-22740.herokuapp.com/dices' )
    
    .then((data) => {
      setDices(data.dices) 
    })
}, [])
  return (
    <ul className="dices">
    {dices.map((dice) => <li key={dice._id}>{dice.playerName} rolou um d{dice.diceType} e tirou um {dice.diceValue}</li>)}
  </ul>
  );
}

export default App;
