import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AllGroups } from "../../Components/ContainerGroups";
import { Loading } from "../../Components/ContainerLoading";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { GroupsContext } from "../../Providers/groups";
import { UserContext } from "../../Providers/usersFunctions";
import { Container } from "./style";

export const GroupsPage = () => {
  const nav = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('@StriveToGet: Token')){
            nav('/main')
        }  
    }, []);
    const { user } = useContext(UserContext)
    const { groups } = useContext(GroupsContext);
    return user <= 0 ? <Loading/> : 
    <Container>
      <Header logged={!!localStorage.getItem('@StriveToGet: Token')} person={user}/>
      <main>
        <AllGroups/>
      </main>
      <Footer/>
    </Container>
};
