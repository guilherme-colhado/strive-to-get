import { createContext, useState } from "react";
import axios from "axios";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [returnGoals, setReturnGoals] = useState("");

  const createGoals = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/goals/", data)
      .then((response) => {
        console.log(response);
        setReturnGoals(response.statusText);
      })
      .catch((err) => {
        console.log(err);
        setReturnGoals(err.response.data.username);
      });
  };

  return (
    <GoalsContext.Provider value={{ returnGoals, createGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};
