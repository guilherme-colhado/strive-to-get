import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { Api } from "../../Services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
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
      .then(toast.success("Activity Created!"))
      .catch((err) => console.log(err));
  };

  const buscaActivities = (group) => {
    Api.get(`activities/?group=${group.id}`)
      .then(toast.success("Listing habits"))
      .catch((err) => console.log(err));
  };

  const attActivity = (data) => {
    Api.patch(`activities/${data.id}/`, data)
      .then(toast.success("Activity edited!"))
      .catch((err) => console.log(err));
  };

  const deleteActivity = (data) => {
    Api.delete(`activities/${data.id}/`)
      .then(toast.success("Deleted sucessufully"))
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
