import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    @media (max-width: 550px) {
        footer::after{
            content: '';
            height: 60px;
            width: 100%;
            display: block;
        }
    }
`