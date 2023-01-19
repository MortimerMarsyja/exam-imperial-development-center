import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledPlanet from "./Planet.styled";

interface Props {
  srokeC?: string;
  size?: number;
}

const Planet: FC<Props> = ({ size }) => {
  const { theme } = useThemeContext();
  return (
    <StyledPlanet
      theme={theme}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 700"
    >
      <title>{"planet"}</title>
      <g fillRule="evenodd">
        <path d="M167.2 47.633C88.958 30.727 29.81 37.559 9.11 72.039c-95.398 158.95 587.73 568.96 683.14 410.01 22.266-37.098-4.664-98.418-65.109-164.98l-9.816 16.359c97.414 107.88-51.543 66.168-50.527 66.477 163.38-282.36-256.54-538.57-433.02-264.6-36.113-41.219-48.066-81.195 22.77-69.922L167.2 47.637z" />
        <path d="M87.371 279.72c-12.082 202.73 208.8 337.16 383.3 233.45-133.66-43.008-284.31-133.98-383.3-233.45z" />
      </g>
    </StyledPlanet>
  );
};

export default Planet;
