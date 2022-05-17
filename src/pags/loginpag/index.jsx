import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import Popup from "../popup/popup";
import { useNavigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "../context/Auth";
import {
  SweetAlertIcon,
  SweetAlertOptions,
  SweetAlertResult,
} from "sweetalert2";
import Swal from "sweetalert2/src/sweetalert2.js";
import { useJwt } from "react-jwt";

const LoginPage = () => {
  const { authenticated, token, saveToken } = useContext(AuthContext);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cadastro, setCadastro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://murmuring-fortress-22740.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => {
        if (res.status != 200) {
          throw new Error("Bad server response");
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res) {
          saveToken(res.token);
          navigate("/home", { replace: true });
        }
        console.log(res);
      })
      .catch((error) => console.error(error));
  };

  function openForm(e) {
    e.preventDefault();

    document.getElementById("cadastro").style.display = "flex";
  }

  return (
    <div id="login">
      <main className="container">
        <h1 className="title">Arauto</h1>

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
      <Popup />;
    </div>
  );
};

export default LoginPage;
