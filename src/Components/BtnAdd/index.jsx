import { BtnAddComponent, BtnAddStyled } from "./style"

export const BtnAdd = ({children, callback}) => {
    return <BtnAddComponent>
        <BtnAddStyled onClick={callback}><p>+</p></BtnAddStyled>
        <div>
            <p>
                {children}
            </p> 
        </div>
    </BtnAddComponent>
}