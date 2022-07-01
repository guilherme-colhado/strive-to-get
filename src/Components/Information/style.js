import styled from "styled-components";

export const DivInfos = styled.div`
  width: 1320px;
  height: 639px;
  border: 1px solid #404040;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: flex-start;
  justify-content: space-between;
  div {
    margin-bottom: 70px;
  }
  img {
    width: 100px;
    margin: 40px 0 0 40px;
  }
  button {
    cursor: pointer;
    text-decoration: none;
    border: none;
    font-weight: 400;
    font-size: 2.3rem;
    letter-spacing: 0.09px;
    opacity: 1;
    margin-left: 50px;
    color: #ccff33;
    width: 150px;
    height: 50px;
    background-color: var(--CardDark);
    border-radius: 5px;
  }
  h2 {
    font-size: 7rem;
    font-weight: 700;
    color: #ffffff;
    margin: 40px 0 40px 50px;
  }
  p {
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.11px;
    opacity: 0.75;
    color: #ffffff;
    margin: 10px 0 0 50px;
  }
  span {
    color: var(--HeaderDark);
    &::before {
      content: "";
      animation: animate infinite 8s;
    }
    @keyframes animate {
      0% {
        content: "to do";
      }
      40% {
        content: "to plan";
      }
      70% {
        content: "to create";
      }
      100% {
        content: "to make more with";
      }
    }
  }

  @media (max-width: 1324px) {
    width: 1000px;
    height: 500px;
  }
  @media (max-width: 1000px) {
    width: 800px;
    height: 900px;
  }
  @media (max-width: 800px) {
    width: 520px;
    height: 900px;
    img {
      margin-left: 20px;
    }
    button {
      margin-left: 20px;
    }
    h2 {
      margin-left: 20px;
    }
    p {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media (max-width: 520px) {
      width: 350px;
      height: 950px;
    }
  }
`;

export const Image = styled.section`
  transform: translateY(-383px);
  margin-left: 600px;
  @media (max-width: 1324px) {
    transform: translateY(-214px);
    margin-left: 600px;
  }
  @media (max-width: 1000px) {
    transform: translateY(-385px);
    margin-left: 100px;
  }

  @media (max-width: 800px) {
    transform: translateY(-257px);
    margin-left: 0px;
  }
  @media (max-width: 520px) {
    transform: translateY(-215px);
    margin-left: 0px;
  }

  img {
    height: 450px;
    width: 650px;
    @media (max-width: 1324px) {
      height: 250px;
      width: 350px;
    }
    @media (max-width: 1000px) {
      height: 450px;
      width: 650px;
    }
    @media (max-width: 800px) {
      height: 300px;
      width: 450px;
    }
    @media (max-width: 520px) {
      width: 300px;
      height: 250px;
    }
  }

  img {
    height: 450px;
    width: 650px;
    @media (max-width: 1324px) {
      height: 250px;
      width: 350px;
    }
    @media (max-width: 1000px) {
      height: 450px;
      width: 650px;
    }
    @media (max-width: 800px) {
      height: 300px;
      width: 450px;
    }
    @media (max-width: 520px) {
      width: 300px;
      height: 250px;
    }
  }
`;

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 200px;
`;
