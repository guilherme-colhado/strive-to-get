import styled from "styled-components";

export const FooterTag = styled.footer`
  width: 100%;
  position: fixed;
  top: 83%;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  background: var(--HeaderDark);
  background: -moz-linear-gradient(top, #ac0000 0%, #700000 100%, #ac0021 100%);
  background: -webkit-linear-gradient(
    top,
    #ac0000 0%,
    #700000 100%,
    #ac0021 100%
  );
  background: linear-gradient(
    to bottom,
    #ac0000 0%,
    #700000 100%,
    #ac0021 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ac0000', endColorstr='#ac0021',GradientType=0 );

  a {
    cursor: pointer;
    font-size: 1.4rem;
    color: #ffffff;
  }
`;

export const WaveBox = styled.div`
  height: 50px;
  width: 100%;

  svg {
    .path-0 {
      animation: pathAnim-0 4s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    @keyframes pathAnim-0 {
      0% {
        d: path(
          "M 0,700 C 0,700 0,350 0,350 C 174.53333333333336,380.93333333333334 349.0666666666667,411.8666666666667 518,382 C 686.9333333333333,352.1333333333333 850.2666666666667,261.4666666666667 1003,246 C 1155.7333333333333,230.53333333333333 1297.8666666666668,290.26666666666665 1440,350 C 1440,350 1440,700 1440,700 Z"
        );
      }
      25% {
        d: path(
          "M 0,700 C 0,700 0,350 0,350 C 153.59999999999997,359.6 307.19999999999993,369.2 451,356 C 594.8000000000001,342.8 728.8,306.8 892,302 C 1055.2,297.2 1247.6,323.6 1440,350 C 1440,350 1440,700 1440,700 Z"
        );
      }
      50% {
        d: path(
          "M 0,700 C 0,700 0,350 0,350 C 136.39999999999998,267.33333333333337 272.79999999999995,184.66666666666669 417,226 C 561.2,267.3333333333333 713.2,432.66666666666663 885,474 C 1056.8,515.3333333333334 1248.4,432.6666666666667 1440,350 C 1440,350 1440,700 1440,700 Z"
        );
      }
      75% {
        d: path(
          "M 0,700 C 0,700 0,350 0,350 C 136.66666666666669,392.79999999999995 273.33333333333337,435.59999999999997 451,448 C 628.6666666666666,460.40000000000003 847.3333333333333,442.4 1019,421 C 1190.6666666666667,399.6 1315.3333333333335,374.8 1440,350 C 1440,350 1440,700 1440,700 Z"
        );
      }
      100% {
        d: path(
          "M 0,700 C 0,700 0,350 0,350 C 174.53333333333336,380.93333333333334 349.0666666666667,411.8666666666667 518,382 C 686.9333333333333,352.1333333333333 850.2666666666667,261.4666666666667 1003,246 C 1155.7333333333333,230.53333333333333 1297.8666666666668,290.26666666666665 1440,350 C 1440,350 1440,700 1440,700 Z"
        );
      }
    }
  }
`;

export const Para = styled.p`
  color: #ffffff;
  margin-bottom: 15px;
  margin-top: 5px;
  font-size: 1.2rem;
`;