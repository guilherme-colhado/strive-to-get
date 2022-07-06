import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BtnAdd } from "../../Components/BtnAdd"
import { CardActivities } from "../../Components/CardActivities"
import { CardGoals } from "../../Components/CardGoals"
import { CardGoalsInscribed } from "../../Components/CardGoalsInscribed"
import { Loading } from "../../Components/ContainerLoading"
import { GroupName } from "../../Components/EditGroup"
import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import { Members } from "../../Components/Members"
import { GroupsContext } from "../../Providers/groups"
import { UserContext } from "../../Providers/usersFunctions"
import { Container } from "./style"

export const GroupPage = () => {
    const { user } = useContext(UserContext)
    const {id} = useParams();
    const { group, listOneGroup } = useContext(GroupsContext)
    useEffect(() => {
        listOneGroup(id)
    }, []);
    return !user.username ? <Loading/> : <Container>
        <Header logged person={user}></Header>
        <main>
            <GroupName/>
            <BtnAdd>Adicione uma nova meta ou atividade</BtnAdd>
            {group.activities?.map((activitie)=><CardActivities activity={activitie}/>)}
            <CardGoals/>
            <CardGoalsInscribed/>
            <Members members={group?.users_on_group}/>
        </main>
        <Footer/>
    </Container>
}