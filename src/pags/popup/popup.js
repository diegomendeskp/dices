import React, {useState, useEffect} from 'react'



const Popup = () => {
  
  const [newUsername, setNewusername] = useState("");
    const [newPassword, setNewpassword] = useState("");
    const [newNickname, setNewnickname] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
   
    const handleSubmit2 = (e) => {
      if(newUsername !== "" && newNickname !== "" && newPassword !== "" && confirmPassword !== ""){
      
      console.log('submit', newUsername, newNickname, newPassword, confirmPassword);
    }else{ alert('ops... esta faltando algo.')

  };
  e.preventDefault();
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
                <label htmlFor='newUsername'>Usuario</label>
                <input type='text' name='newUsername' id='newUsername' value={newUsername} onChange={(e) => setNewusername(e.target.value)} />
            </div>

            <div className='field'>
                <label htmlFor='newNickname'>Apelido</label>
                <input type='text' name='newNickname' id='newNickname' value={newNickname} onChange={(e) => setNewnickname(e.target.value)} />
            </div>

            <div className='field'>
                <label htmlFor='newPassword'>Senha</label>
                <input type='password' name='newPassword' id='newPassword' value={newPassword} onChange={(e) => setNewpassword(e.target.value)} />
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