import React from 'react';

import sanFrancisco from '../images/sf-fog.jpg';
import { Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import SectionTitle from '../section-title/section-title';

const useStyles = makeStyles(() => ({
  container: {
    marginBottom: '150px',
    marginTop: '100px',
  },
  contactBox: {
    backgroundColor: '#efefef',
  },
  contactContent: {
    padding: '50px',
  },
  linkText: {
    marginLeft: '10px',
    display: 'inline',
  },
  image: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <Container id="contact" maxWidth="md" className={classes.container}>
      <SectionTitle title="Contact" />
      <Grid container spacing={5}>
        <Grid justify="center" item sm={12} lg={5}>
          <Paper className={classes.contactBox}>
            <div className={classes.contactContent}>
              <div item>
                <LinkedInIcon />
                <Typography className={classes.linkText} variant="body1">linkedin.com/in/zeniavilla</Typography>
              </div>
              <div item>
                <GitHubIcon />
                <Typography className={classes.linkText} variant="body1">github.com/zeniavilla</Typography>
              </div>
              <div item>
                <LocationOnIcon />
                <Typography className={classes.linkText} variant="body1">San Francisco Bay Area</Typography>
              </div>
              <div item>
                <EmailIcon />
                <Typography className={classes.linkText} variant="body1">zavilla(at)gmail(dot)com</Typography>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={12} lg={7}>
          <Paper className={classes.image} elevation={0}>
            <img src={sanFrancisco} alt="SF bridge in fog" title="SF bridge" height="350" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
