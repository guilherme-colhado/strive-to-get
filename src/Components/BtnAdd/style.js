import styled from "styled-components";

export const BtnAddStyled = styled.button`
    height: 72px;
    padding: 30px 10px;
    width: 70px;
    position: relative;
    border-radius: 100%;
    border: none;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center; 
    font-size: 12rem;
    cursor: pointer;
    color: var(--MainDark);
    background-color: var(--BtnDark);
    display: flex;
    flex-direction: column;
    p{
        margin-bottom: 23px;
        line-height: 49px;
    }
`

export const BtnAddComponent = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    width: 70px;
    button:hover + div{
        opacity: 1;
        visibility: visible;
    }
    >div{
        display: flex;
        opacity: 0;
        visibility: hidden;
        width: max-content;
        height: max-content;
        flex-direction: column;
        align-items: center;
        transition: all .2s ease-in;
        p{
            background-color: var(--CardDark);
            font-size: 1.8rem;
            z-index: 100;
            transform: translate(0,-10px);
            padding: 10px;
        }
        ::before{
            content: '';
            margin-top: 5px;
            width: 20px;
            height: 20px;
            transform: rotate(45deg);
            background-color: var(--CardDark);
        }
    }
`