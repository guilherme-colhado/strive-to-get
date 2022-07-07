import { createContext, useState } from "react";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { GroupsContext } from "../groups";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [returnGoals, setReturnGoals] = useState([]);
  const { listOneGroup } = useContext(GroupsContext)
  const createGoals = (data, id) => {
    Api.post("/goals/", data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
          )}`,
        },
      })
      .then((response) => {
        toast.success('Meta criada!!');
        listOneGroup(id)
      })
      .catch((err) => {
        console.log(err);
        setReturnGoals(err.response.data.username);
      });
  };

  const updateGoals = (data, groupId) => {
    Api.patch(`/goals/${data.id}/`, { achieved:true }, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("@StriveToGet: Token" || "")
        )}`,
      },
    })
      .then(()=>{
        toast.success("Meta arquivada!")
        listOneGroup(groupId)
      })
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
