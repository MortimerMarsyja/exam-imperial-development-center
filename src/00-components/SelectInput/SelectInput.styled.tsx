import themeColors from "@utils/theme";
import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  theme: string;
}

const StyledSelectInput = styled.div<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ theme }) =>
    theme === "light" ? themeColors.dark : themeColors.light};
  background-color: ${({ theme }) =>
    theme === "light" ? themeColors.light : themeColors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  border-radius: 12px;
  select {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    color: ${({ theme }) =>
      theme === "light" ? themeColors.dark : themeColors.light};
    font-size: 16px;
    font-weight: 500;
    padding: 0 10px;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
  button {
    background-color: transparent;
    border: none;
  }
`;

export default StyledSelectInput;
