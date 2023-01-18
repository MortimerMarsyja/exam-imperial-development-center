import themeColors from "@utils/theme";
import styled from "styled-components";

export const StyledPagination = styled.div`
  .content {
    border-radius: 12px 12px 0 0;
    display: flex;
    right: 90px;
    position: fixed;
    bottom: 48px;
    width: 300px;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    color: ${({ theme }) =>
      theme === "dark" ? themeColors.light : themeColors.dark};
    background-color: ${({ theme }) =>
      theme === "dark" ? themeColors.dark : themeColors.light};
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: ${({ theme }) =>
        theme === "dark" ? themeColors.light : themeColors.dark};
      &:disabled {
        color: ${themeColors.disabled};
        cursor: not-allowed;
      }
    }
  }
`;

export default StyledPagination;
