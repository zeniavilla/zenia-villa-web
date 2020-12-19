import {Container, Paper} from '@material-ui/core';
import React from 'react';
import homeImage from '../../images/polaroid.jpeg';
import SectionTitle from '../section-title/section-title';
import '../../styles/home.scss';

function Home() {

  return (
    <Container id="home" className="home-container" maxWidth="md">
      <SectionTitle title="Front-end developer" size="h2" />
      <Paper className="image-container" elevation={0}>
        <img src={homeImage} alt="Polaroid layout" className="home-image" />
      </Paper>
    </Container>
  );
}

export default Home;
