import styled from "styled-components";

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: var(--HeaderDark);
    top: 0;
    width: ${props=>props.open};
    z-index: 2;
    height: 100vh;
    transition: all .3s ease-in;
    color: white;
    padding: 0 15px 0 5px;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    p{
        font-size: 5rem;
        transform: rotate(-90deg);
        margin-bottom: -25px;
    }
    h2{
        font-size: 4rem;
        text-align: center;
    }
    >div{
        margin-top: 80%;    
        max-height: 100vh;
    }
`