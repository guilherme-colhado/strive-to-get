import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { GroupsComponent } from "../../Components/Groups";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { BtnAdd } from "../../Components/BtnAdd";
import { CardHabit } from "../../Components/CardHabit";
import { Modal } from "../../Components/Modal"
import { RegisterHabit } from "../../Components/RegisterHabit";
import { useState } from "react";
import { Search } from '../../Components/Search'

export const Home = () => {
    const nav = useNavigate()
    if(!localStorage.getItem('@StriveToGet: Token')){
        nav('/main')
    }
    const [modal, setModal] = useState(false);

    return (
    <Container>
        <Header login/>
        <GroupsComponent/>
        <Search/>
        <main>
            <BtnAdd callback={()=>setModal(true)}>Clique aqui para adicionar um novo habito</BtnAdd>
            <CardHabit/>
            <CardHabit/>
            <CardHabit/>
            <CardHabit/>
            <CardHabit/>
            <CardHabit/>
        </main>
        <Footer/>
        <Modal open={modal}><RegisterHabit onClose={()=>setModal(false)}/></Modal>
    </Container>
    );
};