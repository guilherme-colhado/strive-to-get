import { useState } from "react";
import { Group } from "./style"
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { SingleGroup } from '../../Components/SingleGroup'
import { useEffect } from "react";

export const GroupsComponent = () => {
    const {buscaSubs, groupsInscribed} = useContext(GroupsContext)

    useEffect(() => {
        buscaSubs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const [openGroup, setOpenGroup] = useState(true);
    return <Group open={openGroup} onMouseEnter={()=>setOpenGroup(false)} onMouseLeave={()=>setOpenGroup(true)}>
        {
            openGroup 
            ? 
            'Grupos'.split('').reverse().map(letter=> <p>{letter}</p>)
            :
            <div>
                <h2>Grupos</h2>
                {groupsInscribed.length > 0 && groupsInscribed.map(element=><SingleGroup key={element.id} props={element}/>)}
            </div>
        }
    </Group>
}