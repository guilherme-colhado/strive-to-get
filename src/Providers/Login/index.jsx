import { createContext } from "react";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../usersFunctions";
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const Login = (data) => {
    Api.post("/sessions/", data)
      .then((res) => loginFunction(res.data.access, data))
      .catch((res) => toast.error('Não foi possivel logar, tente novamente!!'));
  };

  const { setToken } = useContext(UserContext)

  const nav = useNavigate()

  const loginFunction = (token, data) => {
    localStorage.setItem(
      "@StriveToGet: Token",
      JSON.stringify(token)
    )
    setToken(token)
    toast.success('Seja bem vindo ' + data.username + '!!')
    nav("/")
    // window.location.reload(false)
  }

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
};
