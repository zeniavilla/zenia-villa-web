import {CardMedia, Container} from '@material-ui/core';
import React from 'react';
import homeImage from '../../images/sf-fog.webp';
import SectionTitle from '../section-title/section-title';
import '../../styles/home.scss';

function Home() {

  return (
    <Container id="home" className="home-container" maxWidth="md">
      <SectionTitle title="Front-end developer" />
      <CardMedia className="home-image" image={homeImage} />
    </Container>
  );
}

export default Home;
