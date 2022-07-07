import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
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
  background-color: var(--CardDark);
  border: none;
  border-radius: 8px;
  font-size: 3rem;
  margin: 10px;
  text-align: left;
  padding: 40px;
  color: #ffffff;

  ul {
    list-style: circle;
  }

  li {
    margin-bottom: 15px;
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2.05rem;
  }

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }

  @media (max-width: 500px) {
    font-size: 2.3rem;
  }
`;
