import { useState } from "react";
import { Container, Group, GroupMobile } from "./style"
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { SingleGroup } from "../../Components/SingleGroup";
import { useEffect } from "react";
import { Modal } from "../Modal";
import { ModalGroups } from "../ModalGroups";

export const GroupsComponent = () => {
    const { buscaSubs, groupsInscribed } = useContext(GroupsContext);

    useEffect(() => {
        buscaSubs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [modalGroup, setModalGroup] = useState(false) 
    const [openGroup, setOpenGroup] = useState(true);
    return <>
        <Group open={openGroup} onMouseEnter={()=>setOpenGroup(false)} onMouseLeave={()=>setOpenGroup(true)}>
            {
                openGroup 
                ? 
                'Grupos'.split('').reverse().map((letter, index)=> <p key={index}>{letter}</p>)
                :
                <div>
                    <h2>Grupos</h2>
                    {groupsInscribed.length > 0 && groupsInscribed.map(element=><SingleGroup key={element.id} props={element}/>)}
                </div>
            }
        </Group>
        <Container>
            <GroupMobile onClick={()=>setModalGroup(true)}>
                <p>Grupos</p>
            </GroupMobile>
            <Modal open={modalGroup}><ModalGroups onClose={()=>{setModalGroup(false)}}/></Modal>
        </Container>
    </>
}
