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
`

export const Button = styled.button`
    background-color: ${props=> props.link ? 'transparent' : 'var(--MainDark)'};
    color: #ffffff;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    padding: 10px 30px;
    border-radius: 10px;
    border: none;
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
`