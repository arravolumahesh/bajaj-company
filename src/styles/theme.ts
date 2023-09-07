import { ThemeOptions } from "@mui/material/styles";

const theme: ThemeOptions = {
  palette: {
    mode: "light",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => {
        return theme.unstable_sx({
          "*": {
            m: 0,
            p: 0,
            boxSizing: "border-box",
          },
        });
      },
    },
  },
};

export default theme;
