import styled from "styled-components";

export const ModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: ${props=> props.open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background-color: #00000050;
    color: wheat;
`