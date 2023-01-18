import themeColors from "@utils/theme";
import styled from "styled-components";

export const StyledPagination = styled.div`
  width: calc(100%);
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
  .content {
    border-radius: 12px 12px 0 0;
    display: flex;
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
      font-size: 1.5rem;
      font-weight: 700;
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
