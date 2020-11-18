import { Container, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import homeImage from '../images/polaroid.jpeg';
import SectionTitle from '../section-title/section-title';

const useStyles = makeStyles(() => ({
  container: {
    marginBottom: '100px',
  },
  imageContainer: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Container id="home" className={classes.container} maxWidth="md">
      <SectionTitle title="Front-end developer" size="h2" />
      <Paper className={classes.imageContainer} elevation={0}>
        <img src={homeImage} alt="Polaroid layout" className={classes.image} />
      </Paper>
    </Container>
  );
}

export default Home;
