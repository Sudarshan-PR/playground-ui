import "./App.css";
import { HomePage } from "./layouts/home";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "./theme";

function App() {
  // Update the theme only if the mode changes
  const theme = createTheme(getDesignTokens("dark"));

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
