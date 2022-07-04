import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { GroupsComponent } from "../../Components/Groups";
import { Container, ContainerLoading } from "./style";
import { useNavigate } from "react-router-dom";
import { BtnAdd } from "../../Components/BtnAdd";
import { CardHabit } from "../../Components/CardHabit";
import { Modal } from "../../Components/Modal"
import { RegisterHabit } from "../../Components/RegisterHabit";
import { useContext, useEffect, useState } from "react";
import { Search } from '../../Components/Search'
import { HabitsContext } from "../../Providers/habits";
import { UserContext } from "../../Providers/usersFunctions";
import { CircularProgress } from "@mui/material";

export const Home = () => {
    const nav = useNavigate()
    useEffect(() => {
        UserInfos()
        listHabitsNotArchived()
        if(!localStorage.getItem('@StriveToGet: Token')){
            nav('/main')
        }  
    }, []);
    const [modal, setModal] = useState(false);
    const { user, UserInfos } = useContext(UserContext)
    const { habits, createHabit, searchHabit, listHabitsNotArchived} = useContext(HabitsContext);
    const [loading, setLoading] = useState(true);
    const loadingInterval = setInterval(()=>{
        setLoading(false)
        clearInterval(loadingInterval)
    },3000)
    return (
        loading ? 
        <ContainerLoading>
            <CircularProgress style={{width: '10vw', height: '10vw', color: 'red'}}/>
        </ContainerLoading> 
        :
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
    );
};