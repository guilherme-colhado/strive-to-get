import { Container } from "@mui/material";
import "./style.css";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const sendData = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <h2> Cadastre-se</h2>
      <form onSubmit={() => handleSubmit(sendData)}>
        <input placeholder="username" {...register("username")} />
        <input placeholder="Email" {...register("email")} />
        <input placeholder="Password" {...register("password")} />
        <button type="submit">Sign Up</button>
      </form>
    </Container>
  );
};

export default SignUp;
