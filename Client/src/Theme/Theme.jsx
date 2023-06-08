import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#007042',//green
    },
    secondary: {
      main: '#57646E',//grey
      light: '#A0A9AF',
      dark: '#2E3438',
      lightest:"#E0E1E2"
    },
  },
});

export default myTheme;
