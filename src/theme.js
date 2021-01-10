import {createMuiTheme}  from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#5A94A3'},
    secondary: {main: '#C73467'},
  },
  typography: {
    h6: {
      fontWeight: 600,
      fontSize: '16px',
    },
  },
  breakpoints: {
    values: {
      xs: 350,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
