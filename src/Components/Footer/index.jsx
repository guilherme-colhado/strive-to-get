import { FooterTag, DivContainer, WaveBox, Para } from "./style";
import { AiFillCopyrightCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterTag>
      <WaveBox>
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          id="svg"
          viewBox="0 0 1440 700"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,700 C 0,700 0,350 0,350 C 174.53333333333336,380.93333333333334 349.0666666666667,411.8666666666667 518,382 C 686.9333333333333,352.1333333333333 850.2666666666667,261.4666666666667 1003,246 C 1155.7333333333333,230.53333333333333 1297.8666666666668,290.26666666666665 1440,350 C 1440,350 1440,700 1440,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="#ac0000ff"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </WaveBox>
      <DivContainer>
        <a href="https://www.freepik.com/vectors/homework">
          Homework vector created by storyset - www.freepik.com
        </a>
        <Para>
          <AiFillCopyrightCircle />
          2022 All Rights Reserved 2022
        </Para>
      </DivContainer>
    </FooterTag>
  );
};
