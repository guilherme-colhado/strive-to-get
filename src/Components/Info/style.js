import styled from "styled-components";

export const Container = styled.div`
<<<<<<< Updated upstream
  width: 500px;
=======
  max-width: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Card = styled.div`
  width: 100%;
  height: 503px;
>>>>>>> Stashed changes
  background-color: var(--CardDark);
  border: none;
  border-radius: 8px;
  font-size: 27px;
  text-align: left;
  padding: 40px;
  color: #ffffff;
  line-height: 25px;

  ul {
    list-style: circle;
  }

  li {
    margin-bottom: 15px;
  }

<<<<<<< Updated upstream
  @media (max-width: 720px) {
    font-size: 16px;
    width: 80%;
    padding: 30px;
=======
  @media (max-width: 768px) {
    font-size: 23px;
  }

  @media (max-width: 360px) {
    font-size: 19px;
>>>>>>> Stashed changes
  }
`;
