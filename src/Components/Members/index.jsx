import { MembersComponent } from "./style"

export const Members = ({members}) => {
    return <MembersComponent>
        <ul>
            {members && members.map(member=>{
                return <li key={member.id}>{member.username}</li>
            })}
        </ul>
    </MembersComponent>
} 