import { useContext } from "react";
import { AboutUs } from "../../Components/AboutUs";
import { Loading } from "../../Components/ContainerLoading";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { UserContext } from "../../Providers/usersFunctions";
import { Container } from "./style";

export const AboutUsComponent = () => {
  let logged = localStorage.getItem('@StriveToGet: Token')
  const { user } = useContext(UserContext)
  return !logged ?
      <Container>
      <Header/>
      <main>
        <AboutUs/>
      </main>
      <Footer/>
      </Container>
  : !user.username ? <Loading/> :
    <Container>
      <Header logged={logged} person={user}/>
      <main>
        <AboutUs/>
      </main>
      <Footer/>
    </Container>
};
