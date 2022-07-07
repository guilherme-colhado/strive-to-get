import { createContext, useState } from "react";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [returnGoals, setReturnGoals] = useState("");

  const createGoals = (data) => {
    Api.post("/goals/", data)
      .then((response) => {
        console.log(response);
        setReturnGoals(response.statusText);
      })
      .catch((err) => {
        console.log(err);
        setReturnGoals(err.response.data.username);
      });
  };

  const updateGoals = (data) => {
    Api.patch(`/goals/${data.id}`, data.achieved, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(toast.success("Meta editada!"))
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteGoals = (id) => {
    Api.delete(`/goals/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(toast.success("Meta Deletada!"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GoalsContext.Provider
      value={{ returnGoals, createGoals, deleteGoals, updateGoals }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
