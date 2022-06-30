import styledEngine from "@mui/styled-engine";
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
  overflow: scroll;

  #sentry {
    width: 50px;
    height: 50px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 901px) {
    justify-content: center;
  }

  @media (max-width: 461px) {
    width: 80%;
  }
`;
