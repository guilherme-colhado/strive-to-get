import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    main{
        margin-left: 60px;
        display: grid;
        grid-template-columns: repeat(6, 1fr); 
    }
    @media (max-width: 1440px) {
        main{
            grid-template-columns: repeat(5, 1fr); 
        }
    }
    @media (max-width: 1250px) {
        main{
            grid-template-columns: repeat(4, 1fr); 
        }
    }
    @media (max-width: 1000px) {
        main{
            grid-template-columns: repeat(3, 1fr); 
        }
    }
    @media (max-width: 800px) {
        main{
            grid-template-columns: repeat(2, 1fr); 
        }
    }
    @media (max-width: 550px) {
        main{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`