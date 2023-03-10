import styled from "styled-components";
import themeColors from "@utils/theme";

interface Props {
  theme: string;
}

const StyledNavbar = styled.nav<Props>`
  display: flex;
  position: fixed;
  z-index: 100;
  justify-content: center;
  align-items: center;
  top: 2rem;
  border-radius: 9px 0 0 9px;
  right: 0;
  height: 3rem;
  background-color: ${({ theme }) =>
    theme === "dark" ? themeColors.dark : themeColors.light};
  padding: 0 1rem;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  a {
    color: ${({ theme }) =>
      theme === "dark" ? themeColors.light : themeColors.dark};
    text-decoration: none;
    margin-right: 1rem;
    &.active {
      text-decoration: underline;
    }
  }
  .theme-toggler {
    background-color: transparent;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 30px;
  }
`;

export default StyledNavbar;
