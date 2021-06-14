import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { teal, grey } from "@material-ui/core/colors";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main, #00bfa5
      light: "#fffff",
      main: "#00bfa5",
    },
    secondary: {
      light: "#FFFFF",
      main: "#ffcc00",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    dark: {
      main: "#ffd600",
    },
    footer: {
      main: teal[900],
    },
    textColor: {
      main: grey[300],
      light: "#fffff",
      dark: grey[800],
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    type: "dark",
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
