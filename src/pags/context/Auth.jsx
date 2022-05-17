import React, { useState, createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUsername] = useState(null);
  const [token, setToken] = useState(sessionStorage.token);

  /*const token = sessionStorage.token;*/

  const logout = () => {};
  const saveToken = (token) => {
    setToken(token);
    sessionStorage.setItem("token", token);
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!token, token, userName, saveToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
