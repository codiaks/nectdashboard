import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import { useRoutes } from "react-router";
import "./App.css";
import { routes } from "./GlobalRoutes";

const defaultTheme = createTheme();


function App() {
  const route = useRoutes(routes);

  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Suspense fallback={"Loading..."}>{route}</Suspense>
    </ThemeProvider>
  );
}

export default App;
