import { CircularProgress } from "@mui/material";
import { ContainerLoading } from "../../Styles/GlobalStyle";

export const Loading = () => <ContainerLoading>
    <CircularProgress style={{width: '10vw', height: '10vw', color: 'red'}}/>
</ContainerLoading> 