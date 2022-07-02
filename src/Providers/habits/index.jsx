import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState({});
  const [token, setToken] = useState(
    localStorage.getItem("@StriveToGet: Token") || ""
  );

  const { user_id } = jwt_decode(token);

  const listHabits = () => {
    Api.get("habits/personal")
      .then((response) => setHabits(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listHabits();
  }, []);

  const createHabit = (data) => {
    data = { ...data, user: user_id };
    Api.post("habits/", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(toast.success("Habit Created!"))
      .catch((err) => console.log(err));
  };

  const attHabit = (data) => {
    data = { ...data, user: user_id };

    Api.patch(`habits/${data.id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(toast.success("Habit edited!"))
      .catch((err) => console.log(err));
  };

  const deleteHabit = (data) => {
    data = { ...data, user: user_id };

    Api.delete(`habits/${data.id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(toast.success("Deleted sucessufully!"))
      .catch((err) => console.log(err));
  };

  return (
    <HabitsContext.Provider
      value={(habits, listHabits, createHabit, attHabit, deleteHabit)}
    >
      {children}
    </HabitsContext.Provider>
  );
};
