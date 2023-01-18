import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  theme: string;
}

const StyledSideNav = styled.div<Props>`
  background-color: ${({ theme }) =>
    theme === "dark" ? themeColors.dark : themeColors.light};
  position: fixed;
  height: calc(100vh - 80px);
  width: auto;
  display: flex;
  max-width: 120px;
  flex-direction: column;
  align-items: center;
  top: 18px;
  left: 18px;
  border-radius: 20px;
  padding: 0 22px;
  .links {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    a {
      color: ${({ theme }) =>
        theme === "dark" ? themeColors.light : themeColors.dark};
      text-decoration: none;
      margin-bottom: 1rem;
      &.active {
        text-decoration: underline;
      }
    }
  }
  .logo-container {
    margin-top: 2em;
  }
`;

export default StyledSideNav;
