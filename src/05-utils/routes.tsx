import Planets from "@pages/Planets";
import Starships from "@pages/Starships";

export const routes = [
  {
    path: "/",
    element: <Planets />,
    name: "Planets",
  },
  {
    path: "/people",
    element: <p>People</p>,
    name: "People",
  },
  {
    path: "/vehicles",
    element: <p>Vehicles</p>,
    name: "Vehicles",
  },
  {
    path: "/starships",
    element: <Starships />,
    name: "Starships",
  },
];
