import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    padding-top: 86.4px;
    main{
        display: flex;
        flex-wrap: wrap;
    }
    @media (max-width: 550px) {
        footer::after{
            content: '';
            height: 60px;
            width: 100%;
            display: block;
        }
    }
`

export const Principal = styled.div`
    >div{
        display: flex;
        align-items: center;
        >div:nth-child(1){
            width: max-content;
            margin: 0 10px;
        }
        >div:nth-child(2){
            height: 400px;
            overflow-y: hidden;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 550px) {
        >div{
        >div:nth-child(1){
            width: 100vw;
            margin: 0;
        }
    }
`