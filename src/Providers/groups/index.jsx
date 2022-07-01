import { createContext, useState, useEffect } from "react";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";
import { get } from "react-hook-form";
import jwt_decode from "jwt-decode";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState({});

  let { user_id } = jwt_decode(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MDcwOTU3LCJqdGkiOiJkZGY3ZTJjMWU3ZDg0ZWJmYjE5Njk1ODA3OTQ1YzQyMSIsInVzZXJfaWQiOjc4Mn0.S2tWUsQWB1o5NSuuwnWxYTjLtlL0utM6iArKhJivY_I"
  );

  console.log(user_id);

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
    PerPage(1);
  }, []);

  const listOneGroup = (group) => {
    Api.get(`/groups/${group.id}/`)
      .then((response) => setGroup(response.data))
      .catch((err) => console.log(err));
  };

  const createGroup = (data) => {
    Api.post("/groups/", data)
      .then(toast.success("Group Created!"))
      .catch((err) => console.log(err));
  };

  const editGroup = (data) => {
    Api.patch(`/groups/${data.id}/`, data)
      .then(toast.success("Group edited!"))
      .catch((err) => console.log(err));
  };

  const groupSubscription = (data) => {
    Api.post(`/groups/${data.id}/subscribe/`, "", {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(toast.success("Subscribed!"))
      .catch((err) => console.log(err));
  };

  const buscaSubs = () => {
    Api.get(`/groups/subscriptions/`)
      .then(toast.success("Subed Groups"))
      .catch((err) => console.log(err));
  };

  const exitGroup = (group) => {
    Api.delete(`/groups/${group.id}/unsubscribe/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(toast.success("Unsubscribed sucessufully"))
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        group,
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
