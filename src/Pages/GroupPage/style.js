import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 86.4px;
  main {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 550px) {
    footer::after {
      content: "";
      height: 60px;
      width: 100%;
      display: block;
    }
  }
`;

export const Principal = styled.div`
  > div:nth-child(2){
    margin: 20px auto 0;
  }
  > div:nth-child(1){
    justify-content: flex-start;
    width: 100%;
  }
  > div {
    width: 97vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
    > div:nth-child(2) {
      height: 200px;
      border-radius: 10px;
      overflow-y: scroll;
      padding: 3px;
      margin-right: 5px;
      border: 1px solid var(--CardDark);
      max-width: 40%;
      width: max-content;
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
    > div:nth-child(3) {
      height: 200px;
      border-radius: 10px;
      overflow-y: scroll;
      max-width: 40%;
      width: max-content;
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
  @media (max-width: 1170px) {
    height: max-content;
    > div {
      flex-direction: column;
      > div:nth-child(2),
      > div:nth-child(3) {
        width: 100%;
        margin: auto 10px 0;
        max-width: 100%;
        justify-content: center;
        height: max-content;
      }
    }
  }
  @media (max-width: 550px){
    > div {
      flex-direction: column;
      > div:nth-child(2),
      > div:nth-child(3) {
        margin: 0 0 0 3px;
      }
    }
  }
`;
