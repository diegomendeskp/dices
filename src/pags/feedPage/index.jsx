import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';

const feedPage = () => {
    return <h1>feedPage</h1>
}

function App() {
    const [dices, setDices] = useState([])
  useEffect(() => {
      axios.get('https://murmuring-fortress-22740.herokuapp.com/dices' )
      
      .then((response) => {
        setDices(response.data.dices) 
      })
  }, [])
  
  

    return (
  <div>
    
      
    
  
   
    
  
              
                   <ul className="dices">
      {dices.map((dice) => <li key={dice._id}>{dice.playerName} rolou um d{dice.diceType} e tirou um {dice.diceValue}</li>)}
    </ul>
              </div>
    );
  
    
  }
  


export default feedPage;