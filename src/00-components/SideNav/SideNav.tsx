import { useThemeContext } from "@contexts/themeContext";
import { FC } from "react";
import StyledSideNav from "./SideNav.styled";
import { routes } from "@utils/routes";
import { Link, useLocation } from "react-router-dom";
import Logo from "@components/Logo";
import themeColors from "@utils/theme";
interface Props {}

const SideNav: FC<Props> = () => {
  const { theme } = useThemeContext();
  const location = useLocation();
  return (
    <StyledSideNav theme={theme}>
      <div className="logo-container">
        <Logo
          size={30}
          background={theme === "dark" ? themeColors.light : themeColors.dark}
        />
      </div>
      <div className="links">
        {routes.map((route) => (
          <Link
            key={route.name}
            className={`${route.path === location.pathname ? "active" : ""}`}
            to={route.path}
          >
            <p className="route-name">{route.name}</p>
            {route.icon && <p>{route.icon}</p>}
          </Link>
        ))}
      </div>
    </StyledSideNav>
  );
};

export default SideNav;
