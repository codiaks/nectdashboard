import ProtectedLayout from "../components/layouts/ProtectedLayout"; // Adjust path as necessary
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import User from "./User/User";

export const appRoutes = [
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      { element: <Dashboard />, path: "", name: "Dashboard" },
      { element: <User />, path: "users", name: "Users" },
      { element: <Orders />, path: "orders", name: "Orders" },
    ],
    name: "App",
  },
];
