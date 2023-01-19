import Planet from "@assets/icons/Planet";
import Starship from "@assets/icons/Starship";
import StormTrooper from "@assets/icons/StormTrooper";
import Vehicle from "@assets/icons/Vehicle";
import Planets from "@pages/Planets";
import Starships from "@pages/Starships";

export const routes = [
  {
    path: "/",
    element: <Planets />,
    name: "Planets",
    icon: <Planet size={16} />,
  },
  {
    path: "/people",
    element: <p>People</p>,
    name: "People",
    icon: <StormTrooper size={16} />,
  },
  {
    path: "/vehicles",
    element: <p>Vehicles</p>,
    name: "Vehicles",
    icon: <Vehicle size={16} />,
  },
  {
    path: "/starships",
    element: <Starships />,
    name: "Starships",
    icon: <Starship size={16} />,
  },
];
