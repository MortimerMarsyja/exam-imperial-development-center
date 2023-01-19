import Planet from "@assets/icons/Planet";
import Starship from "@assets/icons/Starship";
import StormTrooper from "@assets/icons/StormTrooper";
import Vehicle from "@assets/icons/Vehicle";
import People from "@pages/People";
import Planets from "@pages/Planets";
import Starships from "@pages/Starships";
import Vehicles from "@pages/Vehicles";

export const routes = [
  {
    path: "/",
    element: <Planets />,
    name: "Planets",
    icon: <Planet size={16} />,
  },
  {
    path: "/people",
    element: <People />,
    name: "People",
    icon: <StormTrooper size={16} />,
  },
  {
    path: "/vehicles",
    element: <Vehicles />,
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
