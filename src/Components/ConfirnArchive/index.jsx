import { ComponentArchive } from "./style"

export const Archive = () => {
    return <ComponentArchive>
        <p>Você tem certeza que deseja arquivar este habito</p>
        <div>
            <button>Sim, tenho!</button>
            <button>Não</button>
        </div>
    </ComponentArchive>
}