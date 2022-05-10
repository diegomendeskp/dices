import React, {useState, useEffect} from 'react'



const Popup = () => {
  
  const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
   
    const handleSubmit2 = (e) => {
     

      
  e.preventDefault();
  fetch("https://murmuring-fortress-22740.herokuapp.com/users", {
    method: "POST",
    body: JSON.stringify({ userName: userName,playerName:playerName, password: password }),
    headers: { "Content-type": "application/json" },
  }).then((res) => {
    if (res.status != 200) {
      throw new Error("Bad server response");
    }
    return res.json();
  }).then((res)=>console.log(res)).catch((error)=>console.error(error));
  console.log("submit", userName,playerName, password);

  };


    function closeForm(e) {
        e.preventDefault();
      document.getElementById("cadastro").style.display = "none";
      
      
    };

    return (
        
    

    <div id='cadastro'>
      <h1 className='title'>Cadastro</h1>

      <form className='form-cadastro'>
      <div className='field'>
                <label htmlFor='userName'>Usuario</label>
                <input type='text' name='userName' id='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>

            <div className='field'>
                <label htmlFor='playerName'>Apelido</label>
                <input type='text' name='playerName' id='playerName' value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
            </div>

            <div className='field'>
                <label htmlFor='password'>Senha</label>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='field'>
                <label htmlFor='confirmPassword'>Confirmar Senha</label>
                <input type='password' name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmpassword(e.target.value)} />
            </div>

            <div className='actions'>
                
                 <button type='submit' onClick={handleSubmit2} className='botao'>Cadastrar</button>
                 <button type='submit' onClick={closeForm} className='botao'>Cancelar</button>
        
            </div>
         </form>
           

    </div>
       
    );
}

export default Popup