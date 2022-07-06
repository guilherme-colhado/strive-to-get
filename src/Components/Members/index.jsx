import { MembersComponent } from "./style"

export const Members = ({members}) => {
    return <MembersComponent>
        <ul>
            {members.map(member=>{
                return <li>{member}</li>
            })}
        </ul>
    </MembersComponent>
} 