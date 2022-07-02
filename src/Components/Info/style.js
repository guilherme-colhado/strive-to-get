import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: var(--CardDark);
  border: none;
  height: max-content;
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

  @media (max-width: 720px) {
    font-size: 2rem;
    width: 98%;
    padding: 30px;
  }
`;
