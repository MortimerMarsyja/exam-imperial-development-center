import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import Styledstarship from "./Starship.styled";

interface Props {
  srokeC?: string;
  size?: number;
}

const Starship: FC<Props> = ({ size }) => {
  const { theme } = useThemeContext();
  return (
    <Styledstarship
      theme={theme}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 218.16 218.16"
    >
      <title>{"starship"}</title>
      <path
        fill="inherit"
        d="m73.778 188.362-37.454 5.717a7.508 7.508 0 0 1-7.52-3.484L14.838 167.89a7.483 7.483 0 0 1-1.094-4.144c-.006-.12-.018-.237-.018-.358v-48.03c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v19.927L58.71 81.887l15.068 25.715v80.76zm123.156-80.505a7.499 7.499 0 0 0-7.5 7.5v19.927l-29.983-53.397-15.068 25.716v80.76l37.454 5.717a7.51 7.51 0 0 0 7.521-3.485l13.965-22.705a7.477 7.477 0 0 0 1.093-4.143c.006-.12.018-.237.018-.358v-48.03a7.5 7.5 0 0 0-7.5-7.502zm-67.551 80.822-12.803 9.547v12.434c0 4.143-3.357 7.5-7.5 7.5a7.5 7.5 0 0 1-7.5-7.5v-12.434l-12.803-9.547v-83.112a7.5 7.5 0 0 0-1.029-3.792l-20.531-35.04L102.54 3.828a7.503 7.503 0 0 1 13.08 0l35.323 62.907-20.531 35.04a7.5 7.5 0 0 0-1.029 3.792v83.112zm-.035-120.066a7.503 7.503 0 0 0 1.012-10.559c-.868-1.053-8.839-10.284-21.09-10.284-12.123 0-20.421 9.083-21.327 10.119-2.728 3.117-2.432 7.877.686 10.604a7.494 7.494 0 0 0 4.949 1.865 7.432 7.432 0 0 0 5.615-2.548c1.268-1.402 5.55-5.041 10.078-5.041 5.316 0 9.519 4.831 9.519 4.831a7.5 7.5 0 0 0 10.558 1.013z"
      />
    </Styledstarship>
  );
};

export default Starship;
