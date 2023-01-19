import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const StyledStormTrooper = styled.svg<Props>`
  stroke: ${({ theme }) =>
    theme === "light" ? themeColors.dark : themeColors.light};
  fill: ${({ theme }) =>
    theme === "light" ? themeColors.dark : themeColors.light};
`;

export default StyledStormTrooper;
