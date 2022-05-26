import React, { useState, createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUsername] = useState(null);
  const [token, setToken] = useState(sessionStorage.token);
  const [playerName, setPlayer] = useState(sessionStorage.playerName);

  /*const token = sessionStorage.token;*/

  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  const saveToken = (token) => {
    setToken(token);
    sessionStorage.setItem("token", token);
  };
  const savePlayer = (playerName) => {
    setPlayer(playerName);
    sessionStorage.setItem("playerName", playerName);
  };
  return (
    <AuthContext.Provider
      value={{
        authenticated: !!token,
        token,
        userName,
        playerName,
        savePlayer,
        saveToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
