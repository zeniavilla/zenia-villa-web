import { Button, Typography } from '@material-ui/core';
import React from 'react';
import '../../styles/footer.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="content-wrapper">
        <Typography align="center">© {new Date().getFullYear()} Zenia Villa | Made with React/Material UI</Typography>
        <div className="social-links" aria-labelledby="social links">
          <Button href="https://www.linkedin.com/in/zeniavilla" target="blank">
            <LinkedInIcon />
          </Button>
          <Button href="https://github.com/zeniavilla" target="blank">
            <GitHubIcon />
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
