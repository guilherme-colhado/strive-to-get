import styled from "styled-components";

export const Container = styled.div`
  margin-left: 100px;
  margin-top: 20px;
  color: #ffffff;
  max-width: 870px;

  @media (max-width: 1249px) {
    margin-left: 10px;
  }
  @media (max-width: 500px) {
    margin-left: -40px;
    transform: scale(0.7);
  }
`;

export const Infos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;

  h1 {
    font-size: 7rem;
    margin-bottom: 5px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    :hover {
      overflow: visible;
    }
    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 3.75rem;
    margin-top: 20px;
    max-width: 870px;
    height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    :hover {
      overflow: visible;
    }
    @media (max-width: 900px) {
      max-width: 500px;
    }
    @media (max-width: 500px) {
      font-size: 1.75rem;
      max-width: 300px;
    }
  }

  h3 {
    font-size: 2.15rem;
    margin-left: 15px;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
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
    width: max-content;
    height: 68px;
    overflow: hidden;
    :hover {
      width: max-content;
      overflow: visible;
    }
    @media (max-width: 550px) {
      font-size: 3.7rem;
      height: max-content;
      max-width: 300px;
    }
  }
  svg {
    font-size: 2rem;
    margin-left: 40px;
  }
`;
