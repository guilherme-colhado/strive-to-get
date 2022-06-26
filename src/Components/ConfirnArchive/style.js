import styled from "styled-components";

export const ComponentArchive = styled.div`
    padding: 10px 20px;
    width: 320px;
    background-color: var(--CardDark);
    border-radius: 10px;
    p{
        color: white;
        font-size: 3rem;
        text-align: center;
    }
    div{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }
    button{
        width: 48%;
        cursor: pointer;
        font-size: 2.3rem;
        color: white;
        padding: 5px 10px;
        border: 1px solid white;
        border-radius: 10px;
    }
    button:nth-child(1){
        background-color: var(--BtnConfirmDark);
    }
    button:nth-child(2){
        background-color: var(--BtnDark);
    }
`