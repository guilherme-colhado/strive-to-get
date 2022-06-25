import { Card, CardInfo, CardTitle, Infos } from "./style"
import { AiOutlineCheckCircle, AiOutlineDelete } from 'react-icons/ai'
import { BiArchiveIn } from 'react-icons/bi'
export const CardHabit = () => {
    return <Card>
        <CardTitle>Habito <button><AiOutlineDelete/></button></CardTitle>
        <CardInfo>
            <Infos>
                <div><span>Categoria:</span> <span>"Categoria"</span></div>
                <div><span>Dificuldade:</span> <span>"Dificuldade"</span></div>
                <div><span>Frequencia:</span> <span>"Frequencia"</span></div>
                <div><span>Faltam: 30</span> <button><AiOutlineCheckCircle/> Checkin</button></div>
            </Infos>
            <button><BiArchiveIn/>Arquivar</button>
        </CardInfo>
    </Card>
}