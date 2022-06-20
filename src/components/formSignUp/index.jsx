import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SignUpContext } from "../../Providers/SignUp";

export const FormSignUp = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email required")
      .matches("^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$", "invalid Email"),
    username: yup.string().required("User Name required"),
    password: yup
      .string()
      .required("Password required")
      .matches("^(?=.*[0-9])", "Necessary one number") //solicita um numero na senha
      .matches("(?=.*[a-z])(?=.*[A-Z])", "Necessary one LetterUp") //solicita ao menos 1 letra maiuscula
      .matches("(?=.*[@#$%^&+=])", "Necessary one special character") //solicita 1 caracter especial
      .matches("(?=\\S+$).{8,20}$", "Necessary almost 8 characters"), //solicita ao menos 8 caracteres
  });

  const { createUser } = useContext(SignUpContext);

  const onSubmitFunction = (data) => {
    console.log(data);
    createUser(data);
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
      <input
        type="text"
        placeholder="username"
        {...register("username")}
      ></input>
      <input type="text" placeholder="email" {...register("email")}></input>
      <input
        type="text"
        placeholder="Password"
        {...register("password")}
      ></input>
      <button type="submit">teste</button>
    </form>
  );
};
