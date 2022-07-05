import { AboutUs } from "../../Components/AboutUs";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Container } from "./style";

export const AboutUsComponent = () => {
  return (
    <Container>
      <Header login/>
      <main>
        <AboutUs/>
      </main>
      <Footer/>
    </Container>
  );
};
