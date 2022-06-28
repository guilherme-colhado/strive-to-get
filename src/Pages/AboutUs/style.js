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
`;

export const DevBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--CardDark);
  height: 250px;
  width: 700px;
  border-radius: 15px;
  margin: 20px 0 10px -450px;
`;
export const DevBoxRight = styled(DevBoxLeft)`
  margin-left: 450px;
`;

export const InfoDev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  height: 90%;
  width: 600px;
  margin: 0 0 0 25px;
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
