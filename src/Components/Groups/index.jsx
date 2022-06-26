import { Group } from "./style"

export const GroupsComponent = () => {
    return <Group>
        {'Grupos'.split('').reverse().map(letter=> <span>{letter}</span>)}
    </Group>
}