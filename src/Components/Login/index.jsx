import * as S from "./style";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { LoginContext } from "../../Providers/Login";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { Login } = useContext(LoginContext);

  const onSubmitFunction = (data) => Login(data);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <S.Box>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Entrar</h1>
          <S.Input>
            <label>
              Nome de usuário <S.Error>{errors.username?.message}</S.Error>
            </label>
            <input
              placeholder="Digite aqui seu nome de usuário"
              name="username"
              {...register("username")}
            />
          </S.Input>
          <S.Password>
            <label>
              Senha <S.Error>{errors.password?.message}</S.Error>
            </label>
            <input
              placeholder="Digite aqui sua senha"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <S.Yey onClick={togglePassword}>
              {!showPassword ? <FiEyeOff /> : <FiEye />}
            </S.Yey>
          </S.Password>
          <button type="submit">
            <span>Entrar</span>
          </button>
        </form>
        <div>
          <p>
            Ainda não fez o cadastro?
            <Link to="/signUp">Junte-se a nós</Link>
          </p>
        </div>
      </S.Box>
    </S.Container>
  );
};
