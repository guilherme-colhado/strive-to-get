import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--MainDark);
  color: #ffffff;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DivCont = styled.div`
  width: 1370px;
  height: 650px;
  border: 1px solid var(--CardDark);
  border-radius: 7px;
  padding: 10px 10px 10px 10px;
  margin-top: 130px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-content: flex-start;
  overflow-y: scroll;

  #sentry {
    width: 700px;
    height: 30px;
    font-size: 30px;
    text-align: center;
    &:hover {
      transform: scale(1.1);
    }
  }

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

  @media (max-width: 901px) {
    justify-content: center;
  }

  @media (max-width: 461px) {
    width: 80%;
  }
`;
