import { createContext } from "react";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const Login = (data) => {
    Api.post("/sessions/", data)
      .then((res) => loginFunction(res.data.access, data))
      .catch((res) => toast.error("Não foi possivel logar, tente novamente!!"));
  };

  const nav = useNavigate();

  const loginFunction = (token, data) => {
    localStorage.setItem("@StriveToGet: Token", JSON.stringify(token));
    toast.success("Seja bem vindo " + data.username + "!!");
    nav("/");
  };

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
};
