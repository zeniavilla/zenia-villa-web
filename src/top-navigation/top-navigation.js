import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#fcf4f4',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  pageLinks: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  socialLinks: {
    marginLeft: 0,
    position: 'relative',
  },
}));

const navLinks = [
  { title: 'About me', path: '#about' },
  { title: 'Contact', path: '#contact' },
];

function TopNavigation() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Button href="/">
            <Typography variant="h5" className={classes.title} color="textSecondary">Zenia Villa</Typography>
          </Button>
          {navLinks.map((link) => (
            <Button key={link} href={link.path}>{link.title}</Button>
          ))}
          <div className={classes.grow} />
          <div className={classes.socialLinks}>
            <Button href="https://www.linkedin.com/in/zeniavilla" target="blank">
              <LinkedInIcon />
            </Button>
            <Button href="https://github.com/zeniavilla" target="blank">
              <GitHubIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default TopNavigation;
