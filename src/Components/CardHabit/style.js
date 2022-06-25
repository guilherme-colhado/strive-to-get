import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 10px auto;
`

export const CardTitle = styled.h1`
    background-color: var(--HeaderDark);
    font-size: 3.75rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 99.919%;
    padding: 0 10px;
    border-radius: 13px 13px 0 0;
    button{
        font-size: 1em;
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        padding-top: 5px;
    }
`

export const CardInfo = styled.div`
    padding: 10px 15px 20px;
    background-color: var(--CardDark);
    border-radius: 0 0 10px 10px;
    button{
            font-size: 2rem;
            display: flex;
            justify-content: center;
            align-items: centers;
            border-radius: 10px;
            padding: 2px 0;
            width: 100%;
            border: 1px solid var(--MainDark);
            background-color: var(--BtnDark);
            color: white;
            cursor: pointer;
            svg{
                margin-right: 2px;
                margin-top: 2px;
            }
        }
`

export const Infos = styled.div`
    div{
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
        color: white;
        margin-bottom: 10px;
        width: 100%;
        button{
            width: 55%;
            background-color: var(--BtnConfirmDark);
        }
    }
    min-width: 200px;
    
`