import { createContext, useState, useEffect } from "react";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";
import { get } from "react-hook-form";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState({});
  const [page, setPage] = useState(1);

  const Get = (PerPage) => {
    Api.get(`/groups/?page=${PerPage}`)
      .then((response) => setGroups((pv) => [...pv, ...response.data.results]))
      .catch((err) => console.log(err));
  };

  const PerPage = () => {
    for (let i = 0; i < 2; i++) {
      Get(page + i);
    }
    setPage(page + 1);
  };

  useEffect(() => {
    PerPage();
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
    Api.post(`/groups/${data.id}/subscribe/`)
      .then(toast.success("Subscribed!"))
      .catch((err) => console.log(err));
  };

  const buscaSubs = () => {
    Api.get(`/groups/subscriptions/`)
      .then(toast.success("Subed Groups"))
      .catch((err) => console.log(err));
  };

  const exitGroup = (group) => {
    Api.delete(`/groups/${group.id}/unsubscribe/`)
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
