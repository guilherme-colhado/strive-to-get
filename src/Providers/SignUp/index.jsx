import { createContext, useState } from "react";
import axios from "axios";

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const [returnInfo, setReturnInfo] = useState("");

  const createUser = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/users/", data)
      .then((response) => {
        console.log(response);
        setReturnInfo(response.statusText);
      })
      .catch((err) => {
        console.log(err);
        setReturnInfo(err.response.data.username);
      });
  };

  return (
    <SignUpContext.Provider value={{ returnInfo, createUser }}>
      {children}
    </SignUpContext.Provider>
  );
};
