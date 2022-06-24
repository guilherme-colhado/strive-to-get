import { createContext } from "react";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const Login = (data) => {
    Api.post("/sessions/", data)
      .then((res) =>setToken(res.data.access))
      .catch((res) => toast.error('Não foi possivel logar, tente novamente!!'));
  };

  return (
    <LoginContext.Provider value={{ Login, token }}>{children}</LoginContext.Provider>
  );
};
