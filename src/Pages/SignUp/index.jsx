import "./style.css";
import * as S from "./style";
import { useForm } from "react-hook-form";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignUp = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatorio"),
    password: yup
      .string()
      .required("Campo Obrigatorio")
      .min(6, "Senha contem menos de 6 Caracteres"),
    passwordTwo: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const changePassword = () => {
    setShowPassword(!showPassword);
  };

  const changePasswordTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const sendData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <S.Container>
      <S.Formulario>
        <form onSubmit={handleSubmit(sendData)}>
          <h2> Cadastre-se</h2>

          <S.Input>
            <label>Nome de Usuario</label>
            <input placeholder="Nome de Usuario" {...register("username")} />
            {<span>{errors.name && errors.name.message}</span>}
            <label>Email</label>
            <input placeholder="Email" type="email" {...register("email")} />
          </S.Input>
          <S.Senha>
            <label>Senha</label>
            <input
              type={!!showPassword ? "text" : "password"}
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            <span onClick={changePassword}>
              {" "}
              {!showPassword ? <FiEyeOff /> : <FiEye />}{" "}
            </span>
          </S.Senha>

          <S.SenhaDois>
            <label>Confirmar Senha</label>
            <input
              type={showPasswordTwo ? "text" : "password"}
              placeholder="Confirmar senha"
              {...register("passwordTwo")}
            />
            <span onClick={changePasswordTwo}>
              {" "}
              {!showPasswordTwo ? <FiEyeOff /> : <FiEye />}{" "}
            </span>
          </S.SenhaDois>

          <S.Button type="submit">Sign Up</S.Button>
        </form>
      </S.Formulario>
    </S.Container>
  );
};

export default SignUp;
