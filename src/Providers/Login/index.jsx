import { createContext } from "react";
import { Api } from '../../Services/api';

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const Login = (data) =>{
        console.log(data)
        Api.post('/sessions/', data)
        .then((res) => localStorage.setItem("@StriveToGet: Token", JSON.stringify(res.data.access)))
        .catch((res) => console.log('Resposta a ser dada no toast'))
    }

    return <LoginContext.Provider value={{Login}}>{children}</LoginContext.Provider>
}