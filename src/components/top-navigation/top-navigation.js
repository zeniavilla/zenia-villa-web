import React from 'react';
import {AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItemText, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import '../../styles/top-navigation.scss';

const navLinks = [
  {title: 'About me', path: '/about'},
  {title: 'Resume', path: '/resume'},
  {title: 'Contact', path: '/contact'},
];

function TopNavigation() {
  const [state, setState] = React.useState({
    drawerOpen: false
  });
  
  const toggleDrawer = (open) => {
    setState({...state, drawerOpen: open});
  };

  return (
    <div className="header-container">
      <AppBar className="top-navigation" position="fixed">
        <Toolbar>
          <Button href="/">
            <Typography className="zv-title" variant="h5" color="textPrimary">Zenia Villa</Typography>
          </Button>
          <Typography variant="subtitle2" color="textPrimary">/ Front-end Developer</Typography>
          <div className="menu-container">
            <IconButton className="drawer-icon" edge="end" aria-label="menu" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div>
          <Drawer className="nav-drawer" open={state.drawerOpen}  onClose={() => toggleDrawer(false)} anchor="right">
            <List className="drawer-list">
              <ListItem className="close-button" onClick={() => toggleDrawer(false)}>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </ListItem>
              {navLinks.map((link) => (
                <ListItem button key={link.title} component="a" href={link.path} onClick={() => toggleDrawer(false)}>
                  <ListItemText primary={link.title} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default TopNavigation;
