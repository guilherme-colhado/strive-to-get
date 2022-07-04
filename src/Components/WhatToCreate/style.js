import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 86px 10px 10px;
`;

export const Box = styled.div`
  max-width: 400px;
  width: 100%;
  background: #3b464b;
  border-radius: 6px;
  text-align: center;
  padding: 3rem;

  p {
    color: #ffffff;
    font-size: 4rem;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

export const ButtonGoal = styled.button`
  height: 45px;
  border-radius: 8px;
  background: #ac0001;
  color: #ffffff;
  border: 2px solid #3b464b;
  font-size: 20px;
  margin-right: 5px;
  width: 100%;
  cursor: pointer;

  &:hover {
    border: 2px solid #ffffff;
  }
`;

export const ButtonActivities = styled(ButtonGoal)`
  background: #8f3737;
  margin-left: 5px;
`;
