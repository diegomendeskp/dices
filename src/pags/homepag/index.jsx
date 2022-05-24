import React, { useState, useEffect, useContext } from "react";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";
import "./home.css";

import { isExpired, decodeToken } from "react-jwt";
import { AuthContext } from "../context/Auth";

const token = sessionStorage.token;

const HomePage = () => {
  const { authenticated, token, logout } = useContext(AuthContext);

  const [playerName, setPlayerName] = useState(null);
  const myDecodedToken = decodeToken(token);
  const isMyT = isExpired(token);

  console.log(myDecodedToken);
  /* const { decodedToken, isExpired } = useJwt(token);
  console.log(isExpired);*/
  /* 
    Se for um jwt válido, 'decodedToken' será um objeto 
    que pode se parecer com: 
    { 
      "name": "Gustavo", 
      "iat": 1596408259, 
      "exp": 4752168259 
    }

    'isExpired' retornará um booleano 
    true => seu token expirou 
    false => seu token não expirou 
  */

  return (
    <div className="main" id="main">
      <div className="uperBar">
        <div className="login">
          <h2>Usuario</h2>
        </div>
        <div className="img">
          <h2>info</h2>
        </div>
        <div className="logout">
          <button type="submit" onClick={logout} className="button">
            sair
          </button>
        </div>
      </div>
      <div className="header">
        <h1>Arauto</h1>
      </div>
      <div className="lateralbar">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div className="body">
        <div className="tables">
          <div className="table-head" id="card">
            <h3>Mesas</h3>
          </div>
          <div className="table1" id="card"></div>
          <div className="table2" id="card"></div>
          <div className="table-end" id="card">
            <a href="#">status</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
