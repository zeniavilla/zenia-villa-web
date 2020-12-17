import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import headshot from '../../images/zv-headshot.jpg';
import SectionTitle from '../section-title/section-title';
import '../../styles/about.scss';

function About() {
  return (
    <Container id="about" maxWidth="md" className="about-container">
      <SectionTitle title="About me" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={6}>
          <Paper className="about-image" elevation={0}>
            <img
              src={headshot}
              alt="Zenia Villa"
              title="Zenia Villa image"
            ></img>
          </Paper>
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
