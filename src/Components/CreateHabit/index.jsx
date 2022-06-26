import { CreateHabitComponent } from "./style"

export const CreateHabit = () => {
    const onSubmit = (e) => {e.preventDefault()} 
    return <CreateHabitComponent onSubmit={onSubmit}>
        <div>
            <h2>Cadastrando um novo habito?</h2>
            <button>x</button>
        </div>
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" placeholder="Titulo"/>
        <label htmlFor="category">Categoria:</label>
        <select type="text" id="category" placeholder="Categoria">
            <option value="Saude">Saude</option>
            <option value="Saude">Saude</option>
        </select>
        <label htmlFor="dificulty">Dificuldade:</label>
        <select type="text" id="dificulty">
            <option value="Muito facil">Muito facil</option>
            <option value="Facil">Facil</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Dificil">Dificil</option>
            <option value="Muito Dificil">Muito Dificil</option>
        </select>
        <label htmlFor="title">Titulo:</label>
        <select type="text" id="dificulty">
            <option value={1}>Um dia</option>
            <option value={7}>Uma semana</option>
            <option value={30}>Um mes</option>
            <option value={180}>Um semestre</option>
            <option value={360}>Um ano </option>
        </select>
        <label htmlFor="frequency">Frequencia:</label>
        <select type="text" id="frequency">
            <option value='Diario'>Diario</option>
            <option value='Semanal'>Semanal</option>
            <option value='Mensal'>Mensal</option>
        </select>
        <input type="submit" value="Criar" />
    </CreateHabitComponent>
}