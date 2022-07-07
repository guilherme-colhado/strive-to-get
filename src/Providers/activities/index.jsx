import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { Api } from "../../Services/api";
import { useContext } from "react";
import { GroupsContext } from "../groups";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { listOneGroup } = useContext(GroupsContext);
  const [activities, setActivities] = useState({});
  const [token, setToken] = useState(
    localStorage.getItem("@StriveToGet: Token") || ""
  );

  const listActivities = () => {
    Api.get("activities/")
      .then((response) => setActivities(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listActivities();
  }, []);

  const createActivity = (data) => {
    Api.post("activities/", data)
      .then(toast.success("Atividade criada!"))
      .catch((err) => console.log(err));
  };

  const buscaActivities = (group) => {
    Api.get(`activities/?group=${group.id}`)
      .then(toast.success("Exibindo atividades"))
      .catch((err) => console.log(err));
  };

  const attActivity = (data, Id) => {
    let { id } = data;

    Api.patch(`activities/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(() => {
        listOneGroup(Id);
        toast.success("Editado com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  const deleteActivity = (data) => {
    Api.delete(`activities/${data.id}/`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(toast.success("Deletado!"))
      .catch((err) => console.log(err));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        listActivities,
        createActivity,
        buscaActivities,
        attActivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
