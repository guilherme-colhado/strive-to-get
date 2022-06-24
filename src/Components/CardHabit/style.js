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
    display: inline-block;
    width: 100%;
    padding: 5px 10px;
    border-radius: 13px 13px 0 0;
`

export const CardInfo = styled.div`
    padding: 10px 0 20px;
    background-color: var(--CardDark);
    border-radius: 0 0 10px 10px;
`

export const Infos = styled.div`
    div{
        display: flex;
        justify-content: space-between;
        width: max-content;
        font-size: 2rem;
        color: white;
        margin-bottom: 10px;
    }
    margin: 0 21px;
    
`