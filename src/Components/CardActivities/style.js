import styled from "styled-components";

export const CardContainer = styled.div`
  width: 190px;
  height: 200px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: var(--CardDark);
  border-radius: 8px;
  margin: 5px;
  margin-left: 10px;
  @media (max-width: 480px) {
    width: 312px;
    height: auto;
    background-color: var(--HeaderDark);
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 8px 8px 0 0;
  background-color: var(--HeaderDark);
  font-size: 3.75rem;
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    cursor: pointer;
    border-radius: 8px;
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 160px;
  border-radius: 0 0 8px 8px;
  font-size: 1.75rem;
  @media (max-width: 480px) {
    display: ${(props) => (props.mobile ? "visible" : "none")};
    height: auto;
    width: 100%;
    background-color: var(--CardDark);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 150px;
    height: 25px;
    background-color: var(--HeaderDark);
    color: #ffff;
    bottom: 30px;
    border-radius: 8px;
    cursor: pointer;
    @media (max-width: 480px) {
      display: none;
    }
  }
`;
