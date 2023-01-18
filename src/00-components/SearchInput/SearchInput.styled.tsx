import styled from "styled-components";
import themeColors from "@utils/theme";
interface Props {
  width: number;
  height: number;
  theme: string;
}

const StyledSearchInput = styled.form<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ theme }) =>
    theme === "light" ? themeColors.dark : themeColors.light};
  background-color: ${(props: Props) =>
    props.theme === "light" ? themeColors.light : themeColors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 20px;
  border-radius: 12px;
  input {
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
  }
`;

export default StyledSearchInput;
