import { Footer } from "../../Components/Footer";
import { GroupsComponent } from "../../Components/Groups";
import { Header } from "../../Components/Header";
import { Login } from "../../Components/Login";
import { Container } from "./style";

export const LoginComponent = () => {
  return (
    <Container>
      <Header login/>
      <main>
        <Login />
      </main>
      <Footer/>
    </Container>
  );
};
