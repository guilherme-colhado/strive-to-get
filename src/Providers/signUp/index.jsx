import { createContext, useState } from "react";

import { Api } from "../../Services/api";

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const [returnInfo, setReturnInfo] = useState("");

  const createUser = (data) => {
    Api.post("/users/", data)
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
