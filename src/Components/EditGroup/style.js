import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 10px;
  left: 100px;
  color: #ffffff;
  max-width: 870px;
`;

export const Infos = styled.section`
  h1 {
    font-size: 7rem;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 3.75rem;
    margin-top: 20px;
    width: 870px;
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    :hover {
      overflow: visible;
    }
  }

  h3 {
    font-size: 2.15rem;
    margin-left: 15px;
  }
`;

export const EditName = styled.section`
  margin-bottom: 5px;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;

  h1 {
    font-size: 7rem;
    text-decoration: underline;
    width: 870px;
    height: 68px;
    overflow: hidden;
    :hover {
      width: max-content;
      overflow: visible;
    }
  }
  svg {
    font-size: 2rem;
    margin-left: 40px;
  }
`;
