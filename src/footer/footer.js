import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  container: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#8b8484',
    padding: '20px',
    height: '25px',
    color: '#fff',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography align="center">© {new Date().getFullYear()} Zenia Villa | Made with React/Material UI</Typography>
    </div>
  );
}

export default Footer;
