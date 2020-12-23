import {IconButton, Typography} from '@material-ui/core';
import React from 'react';
import '../../styles/footer.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="content-wrapper">
        <Typography align="center">© {new Date().getFullYear()} by Zenia Villa | Made with React/Material UI</Typography>
        <div className="social-links" aria-labelledby="social links">
          <IconButton href="https://www.linkedin.com/in/zeniavilla" target="blank">
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton href="https://github.com/zeniavilla" target="blank">
            <GitHubIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
