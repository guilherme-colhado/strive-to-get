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
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-content: flex-start; */
  overflow-y: scroll;

  #sentry {
    width: 100%;
    height: 30px;
    font-size: 30px;
    text-align: center;
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

  @media (max-width: 1372px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1129px) {
    grid-template-columns: repeat(4, 1fr);
    transform: scale(0.9);
  }

  @media (max-width: 910px) {
    grid-template-columns: repeat(3, 1fr);
    transform: scale(0.8);
  }

  @media (max-width: 689px) {
    grid-template-columns: repeat(2, 1fr);
    transform: scale(0.8);
  }

  @media (max-width: 471px) {
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    align-content: flex-start;
  }
`;
