import { Card, CardInfo, CardTitle, Infos } from "./style"

export const CardHabit = () => {
    return <Card>
        <CardTitle>Habito</CardTitle>
        <CardInfo>
            <Infos>
                <div><span>Categoria:</span> <span>"Categoria"</span></div>
                <div><span>Dificuldade:</span> <span>"Dificuldade"</span></div>
                <div><span>Frequencia:</span> <span>"Frequencia"</span></div>
            </Infos>
        </CardInfo>
    </Card>
}