import styled from "styled-components";

export const Container = styled.div`
  color: #ffffff;
  width: 100vw;
  justify-self: flex-start;
  padding: 10px 10px 0;
`;

export const Infos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;

  h2 {
    font-size: 3.75rem;
    margin-top: 20px;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 2.15rem;
    margin-left: 15px;
  }
`;

export const EditName = styled.section`
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  h1 {
    font-size: 7rem;
    text-decoration: underline;
  }
  svg {
    font-size: 2rem;
    margin-left: 40px;
  }
`;
