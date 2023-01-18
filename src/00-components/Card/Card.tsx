import { FC } from "react";
import StyledCard from "./Card.styled";

interface Props {
  theme: string;
  children: React.ReactNode;
}

const Card: FC<Props> = ({ children, theme }) => {
  return <StyledCard theme={theme}>{children}</StyledCard>;
};

export default Card;
