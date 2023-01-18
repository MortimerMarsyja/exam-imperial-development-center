import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  theme: string;
}

const StyledLeftControls = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  position: fixed;
  border-radius: 12px 12px 0 0;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ theme }) =>
    theme === "light" ? themeColors.light : themeColors.dark};
  bottom: 48px;
`;

export default StyledLeftControls;
