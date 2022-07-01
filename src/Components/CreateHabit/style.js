import styled from "styled-components";

export const CreateHabitComponent = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: var(--CardDark);
    border-radius: 10px;
    div{
        display: flex;
    }
    button{
        color: white;
        background-color: var(--BtnDark);
        border: 1px solid white;
        font-size: 2.5rem;
        border-radius: 100%;
        width: max-content;
        margin-left: 10px;
        cursor: pointer;
        padding: 0 15px 5px;
    }
    h2{
        color: white;
        margin: 10px 5px;
        font-size: 2.5rem;
    }
    input, select{
        background-color: var(--MainDark);
        border: 1px solid white;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 10px;
        :focus{
            outline: none;
        }
    }
    input[type=${'submit'}]{
        background-color: var(--BtnDark);
        padding: 5px 0;
        cursor: pointer;
    }
    label{
        margin-bottom: 5px;
        margin-left: 10px;
    }
    label, input, select, input::placeholder{
        font-size: 2rem;
        color: white;
    }
    input::placeholder{
        font-family: 'Itim';
        color: #cccccc;
    }
`