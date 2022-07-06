import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 86.4px;
    min-height: 100vh;
    main{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    @media (max-width: 500px) {
        main{
            flex-direction: column;
        }
    }
`