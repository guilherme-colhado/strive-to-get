import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
        main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 0 100px;
        h2 {    
        font-size: 3rem;
        margin: 5px 0;
        }
        > div {
        display: flex;
        border-radius: 10px;
        padding: 10px 5px 0;
        width: 100%;
        border: 1px solid var(--CardDark);
        overflow-x: scroll;
        &::-webkit-scrollbar {
            background-color: transparent;
            border-radius: 7px;
            height: 8px;
            width: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background: linear-gradient(
            to left,
            transparent,
            var(--plusDark),
            transparent
            );
            border-radius: 10px;
        }
        }
    }
  @media (max-width: 550px) {
    main {
      padding: 0 25px;
      > div {
        flex-direction: column;
        height: 300px;
        overflow-x: hidden;
        overflow-y: scroll;
        &::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to top,
            transparent,
            var(--plusDark),
            transparent
          );
          border-radius: 10px;
        }
      }
    }
  }
`;