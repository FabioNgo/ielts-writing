import { createTheme } from "@mui/material/styles";

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
    fontSize: 14,
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
  },
  spacing: 8, // Default spacing unit in rem
  shape: {
    borderRadius: 4,
  },
});

export { myTheme };
