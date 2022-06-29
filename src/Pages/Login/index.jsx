import { Header } from "../../Components/Header";
import { Login } from "../../Components/Login";
import * as S from "./style";

export const LoginComponent = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Login></Login>
      </S.Container>
    </>
  );
};