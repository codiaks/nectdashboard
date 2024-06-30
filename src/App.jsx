import { Box, CssBaseline } from "@mui/material";
import { Suspense } from "react";
import { useRoutes } from "react-router";
import "./App.css";
import { routes } from "./GlobalRoutes";

function App() {
  const route = useRoutes(routes);

  return (
    <Box>
      <CssBaseline />
      <Suspense fallback={"Loading..."}>{route}</Suspense>
    </Box>
  );
}

export default App;
