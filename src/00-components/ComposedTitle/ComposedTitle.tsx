import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledComposedTitle from "./ComposedTitle.styled";

interface Props {
  title: string;
  subtitle: string;
}

const ComposedTitle: FC<Props> = ({ title, subtitle }) => {
  const { theme } = useThemeContext();
  return (
    <StyledComposedTitle theme={theme}>
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </StyledComposedTitle>
  );
};

export default ComposedTitle;
