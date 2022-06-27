import { useState } from "react";
import { Group } from "./style"
import { CardHabit } from '../CardHabit'

export const GroupsComponent = () => {
    const [openGroup, setOpenGroup] = useState(true);
    return <Group open={openGroup} onClick={()=>setOpenGroup(false)}>
        {
            openGroup 
            ? 
            'Grupos'.split('').reverse().map(letter=> <p>{letter}</p>)
            :
            <div>
                <h2>Grupos</h2>
                <CardHabit/>
                <CardHabit/>
                <CardHabit/>
            </div>
        }
    </Group>
}