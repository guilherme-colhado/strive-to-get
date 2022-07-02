import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import { Info } from "../../Components/Information"
import { Container } from "./style"

export const Main = () => {
  return (<Container>
  <Header/>
  <main>
    <Info/>
  </main>
  <Footer/>
</Container>)
}
