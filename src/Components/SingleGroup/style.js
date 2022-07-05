import styled from "styled-components";

export const Header = styled.section`
  width: 208px;
  height: 43px;
  background-color: ${(props) =>
    props.inscribed ? "var(--ColorCardGroupInscribedLight)" : "var(--BtnDark)"};
  color: #ffffff;
  font-size: 2.75rem;
  line-height: 43px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  text-align: center;
  @media (max-width: 550px) {
    width: 100%;
    font-size: 2.7rem;
    text-align: start;
    padding: 0 10px 0;
    border-bottom-left-radius: ${(props) => (props.mobile ? "0" : "7px")};
    border-bottom-right-radius: ${(props) => (props.mobile ? "0" : "7px")};
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
    max-width: 180px;
    word-wrap: break-word;
  }

  @media (max-width: 550px) {
    display: ${(props) => (props.mobile ? "Flex" : "none")};
    width: 80%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  width: 210.5px;
  border: 1px solid var(--MainDark);
  background-color: var(--CardDark);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @media (max-width: 550px) {
    height: auto;
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-right: 0px;
  }
`;

export const Button = styled.button`
  width: ${(props) => (props.inscribed ? "100px" : "170px")};
  height: 21px;
  border-radius: 7px;
  color: #ffffff;
  border: 1px solid #ffffff;
  background-color: ${(props) =>
    props.inscribed ? "var(--ColorCardGroupInscribedLight)" : "var(--BtnDark)"};
  margin-bottom: 10px;
  @media (max-width: 550px) {
    display: ${(props) => (props.mobile ? "visible" : "none")};
  }

  @media (max-width: 299px) {
    width: 80%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 170px;
  bottom: 0;
  @media (max-width: 550px) {
    width: 200px;
  }
`;

export const ViewGroup = styled.button`
  width: 60px;
  height: 21px;
  margin-left: 20px;
  background-color: var(--BtnConfirmDark);
  border-radius: 7px;
  padding-top: 2px;
  color: #ffffff;
  border: 1px solid #ffffff;

  @media (max-width: 550px) {
    display: ${(props) => (props.mobile ? "visible" : "none")};
  }
`;
