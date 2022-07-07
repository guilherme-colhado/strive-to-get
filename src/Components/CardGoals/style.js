import styled from "styled-components";

export const CardStyle = styled.div`
  width: 198px;
  height: 183px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: var(--CardDark);
  border-radius: 8px;
`;

export const HeaderCard = styled.div`
  width: 198px;
  height: 45px;
  border-radius: 8px 8px 0 0;
  border: 1px solid var(--HeaderDark);
  background-color: var(--HeaderDark);
  font-size: 3.75rem;
  display: flex;
  justify-content: center;
`;

export const InfosCard = styled.div`
  width: 198px;
  height: 143px;
  border-radius: 0 0 8px 8px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
  }

  button {
    width: 150px;
    height: 30px;
    background-color: var(--HeaderDark);
    color: #ffff;
    bottom: 30px;
    border-radius: 8px;
  }
`;
