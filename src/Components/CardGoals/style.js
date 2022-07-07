import styled from "styled-components";

export const CardStyle = styled.div`
  width: 198px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin: 3px;
  background-color: var(--CardDark);
  border-radius: 8px;
`;

export const HeaderCard = styled.div`
  width: 198px;
  border-radius: 8px 8px 0 0;
  border: 1px solid var(--HeaderDark);
  background-color: var(--HeaderDark);
  font-size: 3.75rem;
  display: flex;
  justify-content: center;
`;

export const InfosCard = styled.div`
  width: 198px;
  padding: 0 0 10px;
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
    margin: 10px 0;
  }

  button {
    padding: 5px;
    width: 50%;
    border: 1px solid white;
    cursor: pointer;
    font-size: 2rem;
    background-color: var(--HeaderDark);
    color: #ffff;
    bottom: 30px;
    border-radius: 8px;
  }
`;
