import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { SingUp } from "../../Components/Singup";
import { CardInfo } from "../../Components/Info";
import { Container } from "./style";


export const SignUpComponent = () => {
  return (
    <Container>
      <Header/>
      <main>
        <CardInfo />
        <SingUp />
      </main>
      <Footer/>
    </Container>
  );
};
