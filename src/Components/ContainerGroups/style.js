import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--MainDark);
  color: #ffffff;
  height: 80vh;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivCont = styled.div`
  display: grid;

  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1870px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1345px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1085px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 821px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    width: 80vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    align-content: flex-start;
  }
`;

export const Border = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  align-content: flex-start;
  width: max-content;
  height: 650px;
  border: 1px solid var(--CardDark);
  border-radius: 7px;
  padding: 10px 10px 10px 10px;
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
`;

export const SearchComponent = styled.div`
  background-color: var(--CardDark);
  border: none;
  padding: 7px;
  width: max-content;
  display: flex;
  align-self: flex-end;
  margin-bottom: 10px;
  margin-right: 10px;
  transition: all 0.3s ease-in;
  justify-content: center;
  border-radius: 10px;
`;

export const InputSearch = styled.input`
  font-size: 2.5rem;
  width: ${(props) => (props.open ? "255px" : "0")};
  transition: all 0.3s ease-in;
  padding: 0;
  color: white;
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
  }
`;

export const ButtonSearch = styled.button`
  font-size: 2.5rem;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  padding: 3px 5px;
  border-radius: 100%;
`;
