import styled from "styled-components";

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: var(--HeaderDark);
    bottom: 0;
    width: ${props=>props.open ? '57px' : '260px'};
    z-index: 2;
    height: 89vh;
    transition: all .3s ease-in;
    color: white;
    padding: 0 15px 0 5px;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 10px;       
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--MainLigth);    
        border-radius: 20px;
    }
    >p{
        animation: 1s opacity forwards;
        font-size: 5rem;
        transform: rotate(-90deg);
        margin-bottom: -25px;
    }
    h2{
        font-size: 4rem;
        text-align: center;
    }
    >div{
        opacity: 0;
        animation: 2s opacity forwards;
        margin: 110px 0 10px;    
        max-height: 100vh;
    }
    @keyframes opacity {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`