import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledLeftControls from "./LeftControls.styled";

interface Props {
  width: number;
  height: number;
  children: React.ReactNode;
}

const LeftControls: FC<Props> = ({ width, height, children }) => {
  const { theme } = useThemeContext();
  return (
    <StyledLeftControls width={width} height={height} theme={theme}>
      {children}
    </StyledLeftControls>
  );
};

export default LeftControls;
