import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItemText, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import '../../styles/top-navigation.scss';


const navLinks = [
  { title: 'About me', path: '#about' },
  { title: 'Contact', path: '#contact' },
];

function TopNavigation() {
  const [state, setState] = React.useState({
    drawerOpen: false
  });
  
  const toggleDrawer = (open) => {
    setState({ ...state, drawerOpen: open });
  };

  return (
    <div className="header-container">
      <AppBar className="top-navigation" position="fixed">
        <Toolbar>
          <Button href="/">
            <Typography variant="h5" color="textPrimary">Zenia Villa</Typography>
          </Button>
          <div className="menu-container">
            <IconButton className="drawer-icon" edge="end" aria-label="menu" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </div>
          <Drawer open={state.drawerOpen}  onClose={() => toggleDrawer(false)} anchor="right">
            <List className="drawer-list">
              {navLinks.map((link) => (
                <ListItem button key={link.title} component="a" href={link.path}>
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
