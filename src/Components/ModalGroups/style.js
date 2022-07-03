import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  max-height: 100%;
  background-color: #7b0000;
  border-radius: 6px;
  padding: 2rem;

  @media screen and (min-width: 720px) {
    & {
      max-width: 530px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;

  h2 {
    color: #ffffff;
    font-size: 5rem;
  }
`;

export const Close = styled.span`
  background: transparent;
  color: #ffffff;
  border: transparent;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid #ffffff;
  border-radius: 100%;
  margin-bottom: 25px;

  &:hover {
    opacity: 0.3;
  }
`;

export const Cards = styled.div`
  overflow: auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: flex-start;

  @media screen and (min-width: 720px) {
    & {
    }
  }

  &::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 7px;
    width: 9px;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to top, transparent, #db2121, transparent);
    border: 2px solid transparent;
    border-radius: 10px;
  }
`;
