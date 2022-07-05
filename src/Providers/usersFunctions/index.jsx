import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Api } from "../../Services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [returnInfo, setReturnInfo] = useState("");
  const [user, setUser] = useState({});
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@StriveToGet: Token")) || ""
  );

  const user_id = token ? jwt_decode(token).user_id : "";

  const UserInfos = () => {
    Api.get(`/users/${user_id}/`).then((response) => setUser(response.data));
  };

  const UpdateUser = (data) => {
    Api.patch(`/users/${user_id}/`, data, {
      headers: { authorization: `Bearer ${token}` },
    }).then((response) => console.log(response));
  };

  return (
    <UserContext.Provider
      value={{
        returnInfo,
        token,
        user,
        UserInfos,
        UpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
