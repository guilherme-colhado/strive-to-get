import styled from "styled-components";

export const CardContainer = styled.div`
  width: 190px;
  margin: 0 auto;
  height: max-content;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: var(--CardDark);
  border-radius: 8px;
  @media (max-width: 480px) {
    width: 95vw;
    height: max-content;
    background-color: var(--Activitie);
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Header = styled.div`
  width: 100%;
  border-radius: 8px 8px 0 0;
  padding-bottom: 5px;
  padding-left: 10px;
  background-color: var(--Activitie);
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
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 190px;
  border-radius: 0 0 8px 8px;
  font-size: 1.75rem;
  padding: 10px 0 15px;
  >div:nth-child(1){
    display: flex;
    flex-direction: column;
    >p{
      font-size: 3rem;
    }
  }
  >div:nth-child(2){
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    >button{
      font-size: 2rem;
      width: max-content;
      padding: 5px 10px;
      color: white;
      margin: 0 5px;
      background-color: var(--BtnDark);
      border-radius: 5px;
      border: 1px solid white;
      cursor: pointer;
      transition: all .2s ease-in;
      :hover{
        filter: brightness(1.5);
      }
    }
  }
  @media (max-width: 480px) {
    display: ${(props) => (props.mobile ? "visible" : "none")};
    height: max-content;
    width: 100%;
    background-color: var(--CardDark);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
