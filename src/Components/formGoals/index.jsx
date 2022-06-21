import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { GoalsContext } from "../../Providers/Groups";

export const FormGoals = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Title required"),
    difficulty: yup.string().required("Difficulty required"),
    howMuchAchieved: yup.string().required("How Much Achieved required"),
  });

  const { createGoals } = useContext(GoalsContext);

  const onSubmitFunction = (data) => {
    console.log(data);
    createGoals(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <input type="text" placeholder="title" {...register("title")} />
      <select className="difficulty" {...register("difficulty")}>
        <option value=""></option>
        <option value="ease"> Ease</option>
        <option value="intermediary">Intermediary</option>
        <option value="hard">Hard</option>
        <option value="veryHard">Very Hard</option>
      </select>
      <select className="howMuchAchieved" {...register("howMuchAchieved")}>
        <option value=""></option>
        <option value="1"> One Day</option>
        <option value="7">One week</option>
        <option value="30">One month</option>
      </select>
      <input type="checkbox" value="true" {...register("achieved")} />
      <button type="submit">teste</button>
    </form>
  );
};
