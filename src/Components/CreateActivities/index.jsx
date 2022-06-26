import { CreateActivitiesComponent } from "./style"

export const CreateActivities = () => {
    const onSubmit = (e) => {e.preventDefault()} 
    return <CreateActivitiesComponent onSubmit={onSubmit}>
        <div>
            <h2>Cadastrando uma nova Atividade?</h2>
            <button>x</button>
        </div>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" placeholder="Titulo"/>
        <label htmlFor="date">Data de Realização:</label>
        <input type="datetime-local" name="date" id="date" />
        <input type="submit" value="Criar" />
    </CreateActivitiesComponent>
}