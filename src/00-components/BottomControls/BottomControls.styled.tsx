import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  theme: string;
}

const StyledBottomControls = styled.div<Props>`
  width: auto;
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 12px 12px 0 0;
  left: calc(50% - 200px);
  bottom: 48px;
  background: ${({ theme }) =>
    theme === "light" ? themeColors.light : themeColors.dark};
  @media (max-width: 450px) {
    flex-direction: column;
    width: 144px;
    height: 150px;
    bottom: 40px;
    left: 30px;
  }
`;

export default StyledBottomControls;
