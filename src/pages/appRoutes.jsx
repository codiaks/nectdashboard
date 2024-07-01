import ProtectedLayout from "../components/layouts/ProtectedLayout"; // Adjust path as necessary
import Dashboard from "./Dashboard";
import User from "./User/User";

export const appRoutes = [
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      { element: <Dashboard />, path: "", name: "Dashboard" },
      { element: <User />, path: "users", name: "Users" },
    ],
    name: "App",
  },
];
