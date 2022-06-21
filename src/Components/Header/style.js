import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: var(--HeaderDark);
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 86px;
    >div{
        display: flex;
        align-items: center;
    }
    figure{
        margin-right: 10px;
        width: 74px;
    }
    img{
        border-radius: 100px;
        width: 100%;
    }
    h1{
        font-size: 3.75rem;
        width: 110px;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
    }
    
    @media (max-width: 720px) {
        padding: 10px;
        div:nth-child(3){
            position: fixed;
            transition: all .3s ease-in;
            max-height: ${props=>props.mobile ? '200px' : '0'};
            padding: 0;
            overflow: hidden;
            top: 85px;
            left: 0;
            width: 100vw;
            background-color: var(--HeaderDark);
            flex-direction: column;
        }
    }
`

export const Button = styled.button`
    background-color: ${props=> props.link ? 'transparent' : 'var(--MainDark)'};
    color: #ffffff;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px 30px;
    border-radius: 10px;
    border: none;
    margin-right: 10px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &::after{
        transition: all .3s ease-in;
        max-width: 0px;
        width: 100%;
        height: 3px;
        align-self: flex-start;
        content: '';
        background-color: ${props => props.link ? '#ffffff' : ''};
        border-radius: 10px;
    }
    &:hover{
        &::after{
            max-width: 200px;
            height: 3px;
            content: '';
            background-color: ${props => props.link ? '#ffffff' : ''};
            border-radius: 10px;
        }
    }
    @media (max-width: 720px) {
        div{
            flex-direction: row;
            margin: 0 auto;
            width: max-content;
            >:nth-child(1){
                margin-right: 6px;
            }
        }
        background-color: transparent;
        width: 100%;
        margin: 0 10px;
        border-radius: 0;
        box-shadow: 0 5px 10px #000;
    }
`

export const Mobile = styled.div`
    margin-right: 50px;
    input{
        position: absolute;
        opacity: 0;
    }
    label{
        display: none;
        position: absolute;
        width: 45px;
        height: 45px;
        z-index: 1;
        cursor: pointer;
    }
    span{
        display: none;
        position: absolute;
        background-color: var(--MainLigth);
        width: 40px;
        height: 6px;
        border-radius: 10px;
        transition: all .3s linear;
    }
    span::after, span::before{
        content: '';
        position: absolute;
        background-color: var(--MainDark);
        width: 40px;
        height: 7px;
        top: -14px;
        border-radius: 10px;
        transition: all .3s linear;
    }
    span::before{
        top: 14px;
    }
    input:checked~span{
        background-color: transparent;
    }
    input:checked~span::before{
        transform: rotate(-45deg);
        top: 0;
    }
    input:checked~span::after{
        transform: rotate(45deg);
        top: 0;
    }
    @media (max-width: 720px) {
        label, span{
            display: block;
        }
    }
`