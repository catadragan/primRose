import React from "react";
import { createTheme, ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F4EBC7",
      main: "#C0D7B0",
      dark: "#A0CAA2",
      contrastText: "#fff",
    },
    secondary: {
      light: "#F5D9B6",
      main: "#F6C7A5",
      dark: "#F89171",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Handlee",
    h1: {
      fontSize: "1em",
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
       fontStyle: "italic",
       
    },
  },
});

export default theme;
