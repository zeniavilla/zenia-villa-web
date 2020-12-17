import React from 'react';

import sanFrancisco from '../../images/sf-fog.jpg';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
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
        <Grid item sm={12} lg={5}>
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
