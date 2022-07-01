import styled from "styled-components";

export const Header = styled.section`
  width: 208px;
  height: 43px;
  background-color: ${(props) =>
    props.inscribed ? "var(--ColorCardGroupInscribedLight)" : "var(--BtnDark)"};
  color: #ffffff;
  font-size: 2.75rem;
  padding: 10px 0 0 0;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  text-align: center;
  @media (max-width: 461px) {
    width: 100%;
    font-size: 2.7rem;
    text-align: start;
    padding: 10px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 208px;
  padding: 10px 10px 20px 10px;
  h2,
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  @media (max-width: 461px) {
    display: ${(props) => (props.mobile ? "Flex" : "none")};
    width: 80%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  height: 200px;
  border: 1px solid var(--MainDark);
  background-color: var(--CardDark);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  opacity: 0;
  animation: popUp 1s forwards;

  @media (max-width: 461px) {
    height: auto;
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-right: 0px;
  }

  @keyframes popUp {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  width: 170px;
  height: 21px;
  border-radius: 7px;
  color: #ffffff;
  background-color: ${(props) =>
    props.inscribed ? "var(--ColorCardGroupInscribedLight)" : "var(--BtnDark)"};
  margin-bottom: 10px;
  @media (max-width: 461px) {
    display: ${(props) => (props.mobile ? "visible" : "none")};
  }

  @media (max-width: 299px) {
    width: 80%;
  }
`;
