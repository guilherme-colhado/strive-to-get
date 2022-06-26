import styled from "styled-components";

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    font-size: 5rem;
    background-color: var(--HeaderDark);
    bottom: 0;
    height: 100vh;
    color: white;
    padding: 0 15px 0 5px;
    justify-content: center;
    align-items: center;
    span{
        transform: rotate(-90deg);
    }
`