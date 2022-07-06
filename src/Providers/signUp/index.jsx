import { createContext, useState } from "react";

import { Api } from "../../Services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const [returnInfo, setReturnInfo] = useState("");
  const nav = useNavigate() 
  const createUser = (data) => {
    Api.post("/users/", data)
      .then((response) => {
        toast.success('Cadastro efetuado com sucesso')
        nav('/login')
      })
      .catch((err) => {
        console.log(err);
        toast.error('Nome de usuário já existente...');
      });
  };

  return (
    <SignUpContext.Provider value={{ returnInfo, createUser }}>
      {children}
    </SignUpContext.Provider>
  );
};
