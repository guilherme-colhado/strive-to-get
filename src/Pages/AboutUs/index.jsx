import { AboutUs } from "../../Components/AboutUs";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Container } from "./style";

export const AboutUsComponent = () => {
  let logged = localStorage.getItem('@StriveToGet: Token')
  return (
    <Container>
      <Header logged={logged} person/>
      <main>
        <AboutUs/>
      </main>
      <Footer/>
    </Container>
  );
};
