import {CardMedia, Container, Grid, Typography} from '@material-ui/core';
import React from 'react';
import zv from '../../images/pollinate-presentation.webp'
import SectionTitle from '../section-title/section-title';
import '../../styles/about.scss';

function About() {
  return (
    <Container id="about" maxWidth="md" className="about-container">
      <SectionTitle title="About me" />
      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} lg={6}>
          <CardMedia className="about-image" image={zv} />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Typography variant="h4">Oh, hey</Typography>
          <Typography variant="body1">
            My name is Zenia (prounounced Zeen-yuh). I&apos;m a software engineer at IBM Aspera, currently focusing on the frontend.
            I&apos;m a fashion designer turned Marketer turned
            Developer. Web development has become my happy place and I&apos;m
            always looking for the next challenge.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
