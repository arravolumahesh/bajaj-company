import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
  },
  components:{
    MuiTypography:{
      styleOverrides:{
        h4:{
          fontSize:'18px'
        }
      }
    }
  }
};

export default lightThemeOptions;