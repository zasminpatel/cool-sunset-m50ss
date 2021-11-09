import { useRoutes } from "react-router-dom";
import routes from "./router";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ThemeProvider from "./theme/ThemeProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";

import "./styles.css";
const App = () => {
  const content = useRoutes(routes);

  return (
    <>
      {/* <ThemeProvider> */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarProvider
          maxSnack={6}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
        >
          <CssBaseline />
          {content}
        </SnackbarProvider>
      </LocalizationProvider>
      {/* </ThemeProvider> */}
    </>
  );
};
export default App;
