import { MembersComponent } from "./style"

export const Members = ({members}) => {
    return <MembersComponent>
        <h1>Membros:</h1>
        <ul>
            {members && members.map(member=>{
                return <li key={member.id}>{member.username}</li>
            })}
        </ul>
    </MembersComponent>
} 