import { ModalStyle } from "./style";

export const Modal = ({children, open}) => <ModalStyle open={open}>{children}</ModalStyle>