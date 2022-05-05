import React, {useState, useEffect} from 'react'
import "./style.css";
import Popup from '../popup/popup';



const LoginPage = () => {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cadastro, setCadastro] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', userName, password);
    };

  
    function openForm(e) {
        e.preventDefault();
        document.getElementById("cadastro").style.display = "block";
      }
      
      


    return (
        
       


        <div id='login'>
            
            <h1 className='title'>Arauto</h1>
            <form className='form' >
            <div className='field'>
                <label htmlFor='userName'>Usuario</label>
                <input type='text' name='userName' id='userName' value={userName} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className='field'>
                <label htmlFor='password'>Senh</label>
                <input type='password' name='password'  id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='actions'>
                <button type='submit' onClick={handleSubmit} className='botao'>Entrar</button>
                 <button type='submit' onClick={openForm} className='botao'>Cadastrar</button>
        
            </div>
            </form>
            <Popup/>
            
            
        </div>
     
 
    ); 
}

export default LoginPage; 