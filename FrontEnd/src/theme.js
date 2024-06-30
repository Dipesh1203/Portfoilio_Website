// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#04152D",
      light: "#0B2447",
      dark: "#576CBC",
    },
    secondary: {
      main: "#29b6f6",
      contrastText: "#FFFFFF",
    },
    text: {
      secondary: "#FFFFFF",
      disabled: "#FFFFFF",
      hint: "#FFFFFF",
    },
    background: {
      default: "#04152D",
      paper: "#0B2447",
    },
    divider: "#576CBC",
  },
});

export default theme;
