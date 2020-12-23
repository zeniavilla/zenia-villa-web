import {createMuiTheme}  from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {500: '#c1e4f5'},
  },
  typography: {
    h6: {
      fontWeight: 600,
      fontSize: '16px',
    },
  },
});

export default theme;
