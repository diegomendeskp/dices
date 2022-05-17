import React, { useState, useEffect, useContext } from "react";
import { useJwt } from "react-jwt";
import LoginPage from "../loginpag/index";
import { Navigate } from "react-router-dom";

import { isExpired, decodeToken } from "react-jwt";
import { AuthContext } from "../context/Auth";

const token = sessionStorage.token;

const HomePage = () => {
  const { authenticated, token } = useContext(AuthContext);

  const [playerName, setPlayerName] = useState(null);
  const myDecodedToken = decodeToken(token);
  const isMyT = isExpired(token);

  console.log(isMyT);
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
    <div>
      <h1>Ola</h1>
      <p>{String(authenticated)}</p>
    </div>
  );
};

export default HomePage;
