import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { COLORS } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
    typography: {
      fontFamily: string;
    };
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const themes = createTheme({
  status: {
    danger: orange[500],
  },
  typography: {
    fontFamily: fonts.fontFamily,
    htmlFontSize: 10,
    button: {
      textTransform: "capitalize",
    },
    subtitle1: {
        fontSize: 36,
        color: COLORS.primaryMain,
        margin: 0,
        padding: 0,


      },
  },
  palette: {
    primary: {
      main: COLORS.primaryMain,
    },
    secondary: {
      main: COLORS.secondaryMain,
    },
    text: {
      primary: COLORS.textMain,
    },
    background: {
      default: COLORS.background,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: "",
    },
  },
});
