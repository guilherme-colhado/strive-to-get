import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Api } from "../../Services/api";
import { toast } from "react-toastify";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [habitsAchieved, setHabitsAchieved] = useState([]);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@StriveToGet: Token")) || ""
  );

  const user_id = token ? jwt_decode(token).user_id : '';

  const listHabitsNotArchived = () => {
    Api.get('/habits/personal/', {headers: {Authorization: `Bearer ${token}` }})
      .then((response) => {
        const habitsNotArchived = response.data.filter(habit=>!habit.achieved)
        setHabits(habitsNotArchived)
      })
      .catch((err) => console.log(err));
  };

  const listHabitsArchived = () => {
    Api.get('/habits/personal/', {headers: {Authorization: `Bearer ${token}` }})
      .then((response) => {
        const habitsArchived = response.data.filter(habit=>habit.achieved)
        setHabitsAchieved(habitsArchived)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if(token){
      listHabitsNotArchived()
      listHabitsArchived()
    }
  }, []);

  const searchHabit = (title) => {
    Api.get('/habits/personal/', {headers: {Authorization: `Bearer ${token}` }})
      .then((response) => {
        const habitsNotArchived = response.data.filter(habit=>!habit.achieved)
        const habitsSearch = habitsNotArchived.filter(habit=>habit.title.toLowerCase().includes(title.toLowerCase()))
        setHabits(habitsSearch)
        habitsSearch.length > 0 ? title.length>0 && toast.success(`${habitsSearch.length} habitos achados`) : toast.error('Nenhum habito achado') 
      })
      .catch((err) => console.log(err));
  };

  const createHabit = (data) => {
    data = { ...data, user: user_id };
    Api.post("habits/", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res)=>{
        toast.success(`Habito de ${res.data.title} criado!`)
        listHabitsNotArchived()
      })
      .catch((err) => console.log(err));
    };

  const archiveHabit = (data) => {
    data = { ...data, achieved: true, how_much_achieved: 0};
    Api.patch(`/habits/${data.id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(()=>{
        toast.success("Habito arquivado!")
        listHabitsNotArchived()
        listHabitsArchived()
      })
      .catch((err) => console.log(err));
  };

  const checkInHabit = (data, num) => {
    if(num === 0) return archiveHabit(data)
    data = { ...data, how_much_achieved: num};
    Api.patch(`habits/${data.id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(toast.success("Check-In Feito!"))
      .catch((err) => console.log(err));
  };

  const deleteHabit = (data) => {
    data = { ...data, user: user_id };

    Api.delete(`habits/${data.id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res)=>{
        toast.success("Habito deletado!")
        listHabitsNotArchived()
      })
      .catch((err) => console.log(err));
  };

  return (
    <HabitsContext.Provider
      value={{habits, habitsAchieved, searchHabit, listHabitsNotArchived, createHabit, archiveHabit, checkInHabit, deleteHabit}}
    >
      {children}
    </HabitsContext.Provider>
  );
};
