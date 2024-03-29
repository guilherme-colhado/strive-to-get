import * as S from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState, useContext } from "react";
import { SignUpContext } from "../../Providers/signUp";

export const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido!").required("Campo obrigatorio!"),
    password: yup
      .string()
      .trim()
      .required("Campo Obrigatorio!")
      .min(6, "A senha precisa ter no mínimo 6 caracteres."),
    passwordConf: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatorio!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const changePassword = () => {
    setShowPassword(!showPassword);
  };

  const changePasswordTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const { createUser } = useContext(SignUpContext);

  const handleSignup = (data) => {
    const newData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    createUser(newData);
  };

  return (
    <S.Container>
      <S.Box>
        <form onSubmit={handleSubmit(handleSignup)}>
          <h2> Cadastre-se</h2>

          <S.Input>
            <label>
              Nome de Usuário <S.Error>{errors.username?.message}</S.Error>
            </label>
            <input
              name="username"
              placeholder="Nome de Usuário"
              {...register("username")}
            />
            {/* {<span>{errors.name && errors.name.message}</span>} */}
            <label>
              Email <S.Error>{errors.email?.message}</S.Error>
            </label>
            <input
              name="email"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
          </S.Input>
          <S.Password>
            <label>
              Senha <S.Error>{errors.password?.message}</S.Error>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              {...register("password")}
            />
            <S.Yey onClick={changePassword}>
              {" "}
              {!showPassword ? <FiEyeOff /> : <FiEye />}{" "}
            </S.Yey>
          </S.Password>

          <S.Password>
            <label>
              Confirmar Senha <S.Error>{errors.passwordConf?.message}</S.Error>
            </label>
            <input
              name="passwordConf"
              type={showPasswordTwo ? "text" : "password"}
              placeholder="Confirmar senha"
              {...register("passwordConf")}
            />
            <S.Yey onClick={changePasswordTwo}>
              {" "}
              {!showPasswordTwo ? <FiEyeOff /> : <FiEye />}{" "}
            </S.Yey>
          </S.Password>

          <S.Button type="submit">Cadastrar</S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
