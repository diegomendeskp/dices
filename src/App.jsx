import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import HomePage from "./pags/homepag";
import LoginPage from "./pags/loginpag";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
