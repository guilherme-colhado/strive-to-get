import { EditPerfil } from "../../Components/EditPerfil"
import { Header } from "../../Components/Header"
import { Container } from "./style"
import { Footer } from "../../Components/Footer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/usersFunctions";
import { ContainerLoading } from "../../Styles/GlobalStyle";
import { CircularProgress } from "@mui/material";
import { Loading } from "../../Components/ContainerLoading";
import { GroupsContext } from "../../Providers/groups";
import { SingleGroup } from "../../Components/SingleGroup";
import { HabitsContext } from "../../Providers/habits";
import { CardHabit } from "../../Components/CardHabit"

export const User = () => {
    const { user } = useContext(UserContext);
    const { groupsInscribed } = useContext(GroupsContext);
    const { habitsAchieved } = useContext(HabitsContext);
    const [loading, setLoading] = useState(true);
    const loadingInterval = setInterval(()=>{
        setLoading(false)
        clearInterval(loadingInterval)
    },3000)
    return !user.username ? <Loading/> : 
    <Container>
        <div>
            <Header logged person={user}/>
            <EditPerfil/>
        </div>
        <main>
            <h2>Grupos inscritos</h2>
            <div>
                {groupsInscribed.length > 0 && groupsInscribed.map(element=><SingleGroup key={element.id} props={element}/>)}
            </div>
            <h2>Habitos Arquivados</h2>
            <div>
                {habitsAchieved.length > 0 && habitsAchieved.map(element=><CardHabit key={element.id} element={element}/>)}
            </div>
        </main>
        <Footer/>
    </Container>
}