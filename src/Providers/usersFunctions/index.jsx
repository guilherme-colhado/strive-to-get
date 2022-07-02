import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Api } from "../../Services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [returnInfo, setReturnInfo] = useState("");
  const [token, setToken] = useState(
    localStorage.getItem("@StriveToGet: Token") || ""
  );

  useEffect(() => {
    setToken(JSON.parse(token));
  }, [token]);

  const [info, setInfo] = useState("");

  const UserInfos = (id) => {
    Api.get(`/users/${id}/`).then((response) => setInfo(response.data));
  };

  const UpdateUser = (id, data) => {
    Api.patch(`/users/${id}/`, data, {
      headers: { authorization: `Bearer ${token}` },
    }).then((response) => console.log(response));
  };

  return (
    <UserContext.Provider
      value={{
        returnInfo,
        token,
        info,
        UserInfos,
        UpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
