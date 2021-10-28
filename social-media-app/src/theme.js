import { createTheme } from "@mui/material/styles";

import {
  green,
  grey,
  blue,
  deepOrange,
  amber,
  cyan,
} from "@mui/material/colors";


const theme = createTheme({

  
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      light: "#757de8",
      main: "#3f51b5",
      dark: "#002984",
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    danger: {
      light: deepOrange[300],
      main: "#ff8a65",
      dark: deepOrange[700],
    },
    warning: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
    },
    info: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700],
    },

    // typography: { button: { textTransform: "none" } },
    shape: {
      borderRadius: "5px",
    },
  },
});

export default theme;
