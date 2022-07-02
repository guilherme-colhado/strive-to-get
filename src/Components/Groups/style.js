import styled from "styled-components";

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: var(--HeaderDark);
    bottom: 0;
    width: ${props=>props.open ? '57px' : '260px'};
    z-index: 200;
    height: 100vh;
    margin-bottom: 50px;
    transition: all .3s ease-in;
    color: white;
    padding: 0 15px 0 5px;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        background-color: transparent;
        border-radius: 7px;
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: linear-gradient(
            to top,
            transparent,
            var(--MainDark),
            transparent
        );
        border-radius: 10px;
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
        max-height: 100vh;
        ::after{
            content: '';
            width: 100%;
            height: 10px;
            display: block;
        }
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