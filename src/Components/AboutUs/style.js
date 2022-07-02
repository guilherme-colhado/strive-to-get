// container, devBox, h3Nome, h2Info, h2Redes, pRedes
//

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: fit-content;
  font-size: 3rem;
  background-color: var(--MainDark);

  h2,
  h3,
  h4 {
    font-weight: 400;
  }
  h4 {
    font-size: 2rem;
  }
  a {
    text-decoration: none;
    color: white;
  }

  img {
    width: 120px;
    height: 120px;
    margin: 20px;
    margin-bottom: 0px;
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 480px;
    img {
      width: 70px;
      height: 70px;
    }

    h2 {
      font-size: 27px;
    }
  }
`;

export const DevBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--CardDark);
  height: 300px;
  width: 700px;
  border-radius: 15px;
  margin: 20px 0 10px -450px;
  text-align: justify;
  border: 2px solid var(--BtnDark);
  box-shadow: -10px 10px 10px var(--BtnDark);

  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    width: 90%;
    height: 400px;
    margin-left: 0;
    box-shadow: none;
  }
`;
export const DevBoxRight = styled(DevBoxLeft)`
  margin-left: 450px;
  box-shadow: 10px 10px 10px var(--BtnDark);

  @media (max-width: 480px) {
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
  width: 600px;
  margin: 0 0 0 25px;

  @media (max-width: 480px) {
    flex-flow: column wrap;
    margin: 5px;
    height: 80%;
    width: fit-content;
    padding: 5px;
    h4 {
      height: 70%;
      font-size: 22px;
      padding: 5px;
    }
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
