import React, {useState, useEffect, useContext} from 'react'
import "../loginpag/style.css";
import { useNavigate } from "react-router-dom";
import { FaDiceD20 } from "react-icons/fa";
import { GiVerticalBanner } from "react-icons/gi";

import  {SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2'
import { AuthContext } from '../context/Auth'
import Swal from 'sweetalert2/src/sweetalert2.js'
import { useJwt } from "react-jwt";


const Popup = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
   
    function closeForm(e) {
      e.preventDefault();
      navigate("/", { replace: true });};

    const handleSubmit2 = (e) => {
      e.preventDefault();
        if (password != confirmPassword) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Senha diferente',
          })
        }else{
    fetch("https://murmuring-fortress-22740.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({ userName: userName,playerName:playerName, password: password }),
      headers: { "Content-type": "application/json" },
    }).then((res) => {
      if (res.status != 200) {
        throw new Error(res.text(Error));
      }
      return res.json();
    }).then((res)=>console.log(res)).catch((error)=> alert(error));
    /*
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Login Cadastrado',
      showConfirmButton: false,
      timer: 1500
    })*/
  }};


    

    return (
  <div className="master">
          <div className="upBar">

    <h1 className='title'>Cadastro<FaDiceD20 className="icon2"  /></h1>
    </div>

    <div id="login">
      <div id='cadastro'>
       
        <main className="container">
         <div className="card">
            <div className="conteudo">
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
        </div>
      </main>

    </div>
    
  </div>
</div>
    );
}

export default Popup