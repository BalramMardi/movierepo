import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create white theme with custom colors
let whiteTheme = createTheme({
  palette: {
    primary: {
      main: "#329d9c", //teal
      contrastText: "#f0f2f8", //shadWhite
    },
    secondary: {
      main: "#4f8fc0", //blue
    },
    background: {
      default: "#f0f2f8", // shadWhite
      paper: "#ffffff", // White
    },
    text: {
      primary: "#329d9c", // teal
      secondary: "#4f8fc0", // blue
      disabled: "#ffffff",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    action: {
      active: "#4f8fc0",
      hover: "#E6F3F3", //lightteal
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
whiteTheme = responsiveFontSizes(whiteTheme);

// Create dark theme with custom colors
let darkTheme = createTheme({
  palette: {
    primary: {
      main: "#66B2FF",
    },
    secondary: {
      main: "#212121",
    },
    background: {
      default: "#0F1214", // Dark blue
      paper: "#212121", // Grey
    },
    text: {
      primary: "#66B2FF", // blue
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export { whiteTheme, darkTheme };
