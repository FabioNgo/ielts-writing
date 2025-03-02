import { createTheme } from "@mui/material/styles";

const BASED_FONT_SIZE = 14;

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Deep Purple
      light: "#7367f0",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f44336", // Red
      light: "#ef9a9a",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336", // Red
    },
    warning: {
      main: "#ffeb3b", // Yellow
    },
    info: {
      main: "#2196f3", // Blue
    },
    success: {
      main: "#4caf50", // Green
    },
    text: {
      primary: "#212121", // Black
      secondary: "#757575", // Grey
    },
    background: {
      default: "#fff", // White
      paper: "#fafafa", // Light Grey
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: BASED_FONT_SIZE,
    caption: {
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.4,
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.25,
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
    },
    overline: {
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 0.5,
      fontWeight: 500,
    },
    button: {
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15,
      fontWeight: 500,
    },
    h6: {
      fontSize: 22,
      lineHeight: 28,
      letterSpacing: 0,
    },
    h5: {
      fontSize: 24,
      lineHeight: 32,
    },
    h4: {
      fontSize: 28,
      lineHeight: 36,
    },
    h3: {
      fontSize: 36,
      lineHeight: 44,
    },
    h2: {
      fontSize: 45,
      lineHeight: 52,
    },
    h1: {
      fontSize: 57,
      lineHeight: 64,
      letterSpacing: -0.25,
    },
  },
  spacing: 8, // Default spacing unit in rem
  shape: {
    borderRadius: 4,
  },
});

export { myTheme };
