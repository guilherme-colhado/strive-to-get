import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
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

  @media (max-width: 720px) {
    font-size: 16px;
    width: 80%;
    padding: 30px;
  }
`;
