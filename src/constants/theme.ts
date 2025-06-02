import { createTheme } from "@mui/material/styles/";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      light: "#fff",
    },
    secondary: {
      main: "#f5f5f5",
    },
    background: {
      default: "#272727",
    },
  },

  typography: {
    fontFamily: "Segoe UI, sans-serif",
    fontWeightLight: 400,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 100,
          fontSize: "1rem",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          padding: 0,
          backgroundColor: "transparent",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: 0,
          flexDirection: "row",
          backgroundColor: "#272727",
          boxShadow: "none",
        },
      },
    },
  },
});
