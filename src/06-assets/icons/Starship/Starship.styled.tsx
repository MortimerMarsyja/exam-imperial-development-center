import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const Styledstarship = styled.svg<Props>`
  stroke: ${({ theme }) =>
    theme === "light" ? themeColors.dark : themeColors.light};
  fill: ${({ theme }) =>
    theme === "light" ? themeColors.dark : themeColors.light};
`;

export default Styledstarship;
