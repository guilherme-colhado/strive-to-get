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
    justify-content: flex-end;
    width: 70px;
    button:hover + div{
        opacity: 1;
        visibility: visible;
    }
    >div{
        display: flex;
        opacity: 0;
        visibility: hidden;
        width: 200px;
        text-align: center;
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
    @media (max-width: 550px) {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 200;
        background-color: var(--HeaderDark);
        height: 62px;
        width: 100vw;
        flex-direction: column-reverse;
        button{
            position: fixed;
            bottom: 0;
            height: 50px;
            color: var(--HeaderDark);
            font-size: 8rem;
            width: 55px;
            background-color: var(--MainDark);
            p{
                margin-bottom: 17px;
            }
        }
        >div{
            transform: translate(0, -72px);
            p{
                transform: translate(0, 15px);
            }
            flex-direction: column-reverse;
        }
    }
`