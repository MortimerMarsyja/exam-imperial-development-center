import { FC } from "react";
import StyledComposedTitle from "./ComposedTitle.styled";

interface Props {
  theme: string;
  title: string;
  subtitle: string;
}

const ComposedTitle: FC<Props> = ({ theme, title, subtitle }) => {
  return (
    <StyledComposedTitle theme={theme}>
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </StyledComposedTitle>
  );
};

export default ComposedTitle;
