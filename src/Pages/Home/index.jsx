import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { GroupsComponent } from "../../Components/Groups";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const nav = useNavigate()
    if(!localStorage.getItem('@StriveToGet: Token')){
        nav('/main')
    }
    return (
    <Container>
        <Header login/>
        <GroupsComponent/>
        <main>
        </main>
        <Footer/>
    </Container>
    );
};