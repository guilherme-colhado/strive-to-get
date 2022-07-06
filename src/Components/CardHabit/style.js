import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 10px 5px 0 5px;
  animation: popUp 0.5s forwards;
  @keyframes popUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const CardTitle = styled.h1`
  background-color: var(--HeaderDark);
  font-size: 3.75rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99.919%;
  padding: 0 10px;
  border-radius: 13px 13px 0 0;
  button {
    font-size: 1em;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    padding-top: 5px;
  }

  @media (max-width: 550px) {
    width: 87vw;
    height: ${(props) => (props.mobile ? "" : "43px")};
    border-bottom-left-radius: ${(props) => (props.mobile ? "0" : "7px")};
    border-bottom-right-radius: ${(props) => (props.mobile ? "0" : "7px")};
    button {
      display: ${(props) => (props.mobile ? "visible" : "none")};
    }
  }

  @media (max-width: 487px) {
    width: 85vw;
  }
  @media (max-width: 400px) {
    width: 82vw;
  }
  @media (max-width: 340px) {
    width: 80vw;
  }
`;

export const CardInfo = styled.div`
  padding: 10px 15px 20px;
  background-color: var(--CardDark);
  border-radius: 0 0 10px 10px;
  button {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: centers;
    border-radius: 10px;
    padding: 2px 0;
    width: 100%;
    border: 1px solid var(--MainDark);
    background-color: var(--BtnDark);
    color: white;
    cursor: pointer;
    svg {
      margin-right: 2px;
      margin-top: 2px;
    }
  }

  @media (max-width: 550px) {
    display: ${(props) => (props.mobile ? "visible" : "none")};
  }
`;

export const Infos = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    color: white;
    margin-bottom: 10px;
    width: 100%;
    button {
      width: 55%;
      background-color: var(--BtnConfirmDark);
    }
  }
  min-width: 200px;
`;
