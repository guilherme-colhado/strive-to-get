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
        flex-wrap: wrap;
        align-items: center;
        >div:nth-child(1){
            width: max-content;
            margin: 0 10px;
        }
        >div:nth-child(2){
            height: 200px;
            border-radius: 10px;
            overflow-y: scroll;
            padding: 3px;
            margin-right: 5px;
            border: 1px solid var(--CardDark);
            width: 40%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            &::-webkit-scrollbar {
                background-color: transparent;
                border-radius: 7px;
                width: 5px;
            }

            &::-webkit-scrollbar-thumb {
                background: linear-gradient(
                    to top,
                    transparent,
                    var(--ColorCardGroupNotInscribedDark),
                    transparent
                );
                border-radius: 10px;
            }
        }
        >div:nth-child(3){
            height: 200px;
            border-radius: 10px;
            overflow-y: scroll;
            width: 40%;
            padding: 3px;
            border: 1px solid var(--CardDark);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            &::-webkit-scrollbar {
                background-color: transparent;
                border-radius: 7px;
                width: 5px;
            }

            &::-webkit-scrollbar-thumb {
                background: linear-gradient(
                    to top,
                    transparent,
                    var(--ColorCardGroupNotInscribedDark),
                    transparent
                );
                border-radius: 10px;
            }
        }
    }
    @media (max-width: 550px) {
        >div{
            flex-direction: column;
            >div:nth-child(1){
                width: 100vw;
                margin: 0;
            }
            >div:nth-child(2), >div:nth-child(3){
                width: 100%;
                height: max-content;
            }
    }
`