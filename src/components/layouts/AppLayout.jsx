import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Outlet } from "react-router";
import Copyright from "../utils/CopyRight";
import Sidebar from "./Drawer";
import Header from "./Header";

export default function AppLayout() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Box sx={{ display: "flex" }}>
      <Header toggleDrawer={toggleDrawer} open={open} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
