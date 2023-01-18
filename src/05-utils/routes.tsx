import Planets from "@pages/Planets";

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
    element: <p>Starships</p>,
    name: "Starships",
  },
];
