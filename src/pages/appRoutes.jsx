import React from "react";
import ProtectedLayout from "../layouts/ProtectedLayout"; // Adjust path as necessary
import Dashboard from "./Dashboard/Dashboard";
import User from "./User/User";

export const appRoutes = [
  {
    path: "app",
    element: <ProtectedLayout />,
    children: [
      { element: <Dashboard />, path: "", name: "Dashboard" },
      { element: <User />, path: "user", name: "User" },
    ],
    name: "App",
  },
];
