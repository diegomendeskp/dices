import React, { useState, useEffect } from "react";
import "./style.css";
import Popup from "../popup/popup";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cadastro, setCadastro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://murmuring-fortress-22740.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify({ userName: userName, password: password }),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => {
        if (res.status != 200) {
          throw new Error("Bad server response");
        }
        return res.json();
      })
      .then((res) => {
        if (res) {
          navigate("/home", { replace: true });
        }
        console.log(res);
      })
      .catch((error) => console.error(error));
    console.log("submit", userName, password);
  };

  function openForm(e) {
    e.preventDefault();
    document.getElementById("cadastro").style.display = "block";
  }

  return (
    <div id="login">
      <h1 className="title">Arauto</h1>
      <main className="container">
        <div className="card">
          <div className="conteudo">
            <form className="form">
              <div className="field">
                <label htmlFor="userName">Usuario</label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="actions">
                <button type="submit" onClick={handleSubmit} className="botao">
                  Entrar
                </button>
                <button type="submit" onClick={openForm} className="botao">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Popup />
    </div>
  );
};

export default LoginPage;
