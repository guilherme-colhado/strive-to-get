import styled from "styled-components";

export const CardStyle = styled.div`
  width: 190px;
  height: 200px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: var(--CardDark);
  border-radius: 8px;
  @media (max-width: 480px) {
    width: 312px;
    height: 60px;
    background-color: var(--HeaderDark);
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const HeaderCard = styled.div`
  width: 190px;
  height: 40px;
  border-radius: 8px 8px 0 0;
  border: 1px solid var(--HeaderDark);
  background-color: var(--HeaderDark);
  font-size: 3.75rem;
  @media (max-width: 480px) {
    width: auto;
  }
`;

export const InfosCard = styled.div`
  width: 190px;
  height: 160px;
  border-radius: 0 0 8px 8px;
  font-size: 1.75rem;
  @media (max-width: 480px) {
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    margin-top: 10px;
    height: 110px;
    @media (max-width: 480px) {
      height: auto;
      margin-top: none;
      margin-bottom: 10px;
    }
  }

  h4 {
    @media (max-width: 480px) {
      display: none;
    }
  }

  button {
    width: 150px;
    height: 25px;
    background-color: var(--HeaderDark);
    color: #ffff;
    bottom: 30px;
    border-radius: 8px;
    @media (max-width: 480px) {
      display: none;
    }
  }
`;
