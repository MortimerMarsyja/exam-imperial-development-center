import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledBottomControls from "./BottomControls.styled";

interface Props {
  width: number;
  height: number;
  children: React.ReactNode;
}

const BottomControls: FC<Props> = ({ width, height, children }) => {
  const { theme } = useThemeContext();
  return (
    <StyledBottomControls width={width} height={height} theme={theme}>
      {children}
    </StyledBottomControls>
  );
};

export default BottomControls;
