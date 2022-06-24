import { BtnAddComponent, BtnAddStyled } from "./style"

export const BtnAdd = () => {
    return <BtnAddComponent>
        <BtnAddStyled><p>+</p></BtnAddStyled>
        <div>
            <p>
                Clique aqui para adicionar um novo habito
            </p> 
        </div>
    </BtnAddComponent>
}