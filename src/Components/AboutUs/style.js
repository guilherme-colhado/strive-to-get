import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  font-size: 3rem;
  background-color: var(--MainDark);
  color: white;

  h2 {
    font-size: 3.2vw;
  }

  h2,
  h3,
  h4 {
    font-weight: 400;
  }
  h4 {
    font-size: 70%;
  }
  a {
    text-decoration: none;
    color: white;
  }

  img {
    width: 11vw;
    height: 11vw;
    margin: 20px;
    margin-bottom: 0px;
    border-radius: 50%;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    width: 95%;
    align-itens: center;
    justify-content: center;
    img {
      width: 70px;
      height: 70px;
    }

    h2 {
      font-size: 4vw;
    }
  }
`;

export const DevBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--CardDark);
  width: 55%;
  border-radius: 15px;
  margin: 20px 0 10px -37%;
  text-align: justify;
  border: 2px solid var(--BtnDark);
  box-shadow: -10px 10px 10px var(--BtnDark);

  @media (max-width: 720px) {
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    width: 90%;
    height: fit-content;
    margin-left: 0;
    box-shadow: none;
    padding: 5px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    width: 90%;
    height: fit-content;
    margin-left: 0;
    box-shadow: none;
    font-size: 4.3vw;
    h4 {
      font-size: 4vw;
    }
  }
`;
export const DevBoxRight = styled(DevBoxLeft)`
  margin-left: 37%;
  box-shadow: 10px 10px 10px var(--BtnDark);

  @media (max-width: 720px) {
    margin-left: 0px;
    box-shadow: none;
  }
`;

export const ImgName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

export const InfoDev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  height: 90%;
  width: 90%;
  margin: 0 0 0 25px;

  @media (max-width: 720px) {
    flex-flow: column wrap;
    margin: 5px;
    height: 80%;
    width: fit-content;
    padding: 5px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  font-size: 5rem;
  background-color: var(--HeaderDark);
  bottom: 0;
  height: 100vh;
  color: white;
  padding: 0 15px 0 5px;
  justify-content: center;
  align-items: center;
  span {
    transform: rotate(-90deg);
  }
`;
