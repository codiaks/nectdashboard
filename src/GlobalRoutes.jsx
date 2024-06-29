import { Outlet } from "react-router-dom";
import { appRoutes } from "./pages/appRoutes";

export const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      ...appRoutes,
      { path: "*", element: "Page Not Found" },
    ],
  },
];