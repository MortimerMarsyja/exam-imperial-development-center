import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const StyledComposedTitle = styled.div<Props>`
  width: 100%;
  margin-bottom: 9px;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) =>
      theme === "dark" ? themeColors.red[500] : themeColors.dark};
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    color: ${({ theme }) =>
      theme === "dark" ? themeColors.light : themeColors.dark};
  }
  @media (max-width: 500px) {
    width: 140px;
    margin-left: 24px;
  }
`;

export default StyledComposedTitle;
