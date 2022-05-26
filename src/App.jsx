import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import axios from "axios";
import HomePage from "./pags/homepag";
import LoginPage from "./pags/loginpag";
import Popup from "./pags/popup/popup";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./pags/context/Auth";
import { useJwt } from "react-jwt";

function App() {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    if (!authenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<Popup />} />

            <Route
              path="/home"
              element={
                <Private>
                  <HomePage />
                </Private>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
