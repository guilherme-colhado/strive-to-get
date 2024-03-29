import { useEffect, useState } from "react";
import { ClockStyle } from "./style";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  
  return (
    <ClockStyle>
      <h2>{time.toLocaleTimeString("pt-BR").substring(0,5)}</h2>
    </ClockStyle>
  );
};
