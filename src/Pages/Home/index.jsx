import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { GroupsComponent } from "../../Components/Groups";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { BtnAdd } from "../../Components/BtnAdd";
import { CardHabit } from "../../Components/CardHabit";
import { Modal } from "../../Components/Modal"
import { RegisterHabit } from "../../Components/RegisterHabit";
import { useContext, useEffect, useState } from "react";
import { Search } from '../../Components/Search'
import { HabitsContext } from "../../Providers/habits";
import { UserContext } from "../../Providers/usersFunctions";
import { Loading } from "../../Components/ContainerLoading";

export const Home = () => {
    const nav = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('@StriveToGet: Token')){
            nav('/main')
        }  
    }, []);
    const [modal, setModal] = useState(false);
    const { user } = useContext(UserContext)
    const { habits, createHabit, searchHabit } = useContext(HabitsContext);
    return habits.length <= 0 ? <Loading/> :
        <>
            <Container >
                <div>
                    <Header logged person={user}/>
                    <GroupsComponent/>
                    <Search cb={searchHabit}/>
                </div>
                <main>
                    <BtnAdd callback={()=>setModal(true)}>Clique aqui para adicionar um novo habito</BtnAdd>
                    {habits && habits.map(habit => <CardHabit key={habit.id} element={habit}/>)}
                </main>
                <Footer/>
            </Container>
            <Modal open={modal}><RegisterHabit onSubmit={createHabit} onClose={()=>setModal(false)}/></Modal>
        </>
};