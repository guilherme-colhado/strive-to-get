import { createContext, useState, useEffect } from "react";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";
import { get } from "react-hook-form";
import jwt_decode from "jwt-decode";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [groupsInscribed, setGroupsInscribed] = useState([]);
  const [group, setGroup] = useState({});
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@StriveToGet: Token")) || ""
  );

  let user_id = token ? jwt_decode(token).user_id : "";

  const searchGroups = (input) => {
    Api.get(`/groups/?search=${input}`)
      .then((response) => setGroups(response.data.results))
      .catch((err) => console.log(err));
  };

  const Get = (PerPage) => {
    Api.get(`/groups/?page=${PerPage}`)
      .then((response) => setGroups((pv) => [...pv, ...response.data.results]))
      .catch((err) => console.log(err));
  };

  const PerPage = (x) => {
    for (let i = x; i < x + 2; i++) {
      Get(i);
    }
  };

  useEffect(() => {
    if (token) {
      PerPage(1);
      buscaSubs();
    }
  }, []);

  const listOneGroup = (group) => {
    Api.get(`/groups/${group}/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then((response) => setGroup(response.data))
      .catch((err) => console.log(err));
  };

  const createGroup = (data) => {
    Api.post("/groups/", data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(() => {
        toast.success("Grupo Criado!");
        buscaSubs();
      })
      .catch((err) => console.log(err));
  };

  const editGroup = (data) => {
    let { id } = data;
    let newdata = { name: data.name };

    Api.patch(`/groups/${id}/`, newdata, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(() => {
        listOneGroup(id);
        toast.success("Grupo editado!");
      })
      .catch((err) => console.log(err));
  };

  const groupSubscription = (data) => {
    Api.post(`/groups/${data.id}/subscribe/`, "", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        toast.success("Incrito com sucesso!");
        buscaSubs();
      })
      .catch((err) => console.log(err));
  };

  const buscaSubs = () => {
    Api.get(`/groups/subscriptions/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setGroupsInscribed(res.data))
      .catch((err) => console.log(err));
  };

  const exitGroup = (group) => {
    Api.delete(`/groups/${group.id}/unsubscribe/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(toast.success(`Saiu do grupo ${group.name}!`))
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        groupsInscribed,
        group,
        searchGroups,
        PerPage,
        listOneGroup,
        createGroup,
        editGroup,
        groupSubscription,
        buscaSubs,
        exitGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
