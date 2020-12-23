import {Button, Card, CardContent, Container, Typography} from "@material-ui/core";
import React from 'react';
import SectionTitle from "../section-title/section-title";
import '../../styles/resume.scss';
import pdf from '../../docs/zv-resume.pdf';

const resumeData = [
  {
    timeframe: '2018 - Present',
    title: 'Software Engineer I && II',
    company: 'IBM Aspera',
    body: [
      "I joined the IBM Aspera team as it was in the beginning stages of Aspera on Cloud (AoC), a SaaS file transfer application. After doing some server-side work for web apps Faspex and Files, I had the opportunity to build features on the client-side and quickly joined the front-end development team. Throughout my time at Aspera, I've moved through the pipeline (pun intended) of fixing small bugs to implementing major features and being an active part of design-development discussions (I love accidental alliteration).",
      "Recently, the front-end team has expanded into working on Faspex, which involves building new features that fully utilize the Carbon Design System. In a typical week, I'll work in tandem with members of the design, back-end, devtest, and/or microcopy teams. From time to time, I fix critical bugs that may come up in production. I also stay actively involved in design reviews."
    ],
  },
  {
    timeframe: '2017',
    title: 'Transition',
    company: 'Learning web development',
    body: [
      "Coding had been on my mind since I took a Computer Science class in high school. After creating the website for AMCT Design using Joomla and customizing the client-side code, I took a few online classes and kept wondering if I could make it a career. My career had taken me down a path that left me feeling unchallenged. With the support of my family, I stopped working and started to learn how to code in JavaScript. I paid for various types of memberships including Code School and Learn.co and found some strucutre to learn JS, Ruby on Rails, and React. It was 8+ days five days a week for seven months and then applying aggressively. I ended up moving to the Bay area after accepting a role at IBM and it ended up being the best opportunity."
    ],
  },
  {
    timeframe: '2012 - 2017',
    title: 'Marketing Coordinator & Manager',
    company: 'AMCT Design | Giumarra Companies',
    body: [
      "During this time, I took on various roles in different industries. The highlights include producing tradeshows for an internationally-recognized produce brand, social media strategy and content, creating and managing a startup's website, and sales. A lot of the creativity and being product-minded has carried over into my work as a developer. Moreover, these years helped me realize my love of and talent for working closely with people."
    ],
  },
];

function Resume() {
  return (
    <Container className="resume-container" maxWidth="md">
      <SectionTitle title="Resume" />
      <Button className="download-button" a href={pdf} target="blank" variant="contained" color="primary">Download CV</Button>
      {resumeData.map(data => {
        return (
          <Card key={data.timeframe} className="experience-card">
            <CardContent>
              <Typography variant="h6" display="block">{data.timeframe}</Typography>
              <Typography variant="overline" display="block">{data.title}</Typography>
              <Typography variant="overline" display="block">{data.company}</Typography>
              {data.body.map((paragraph, index) => {
                return (
                  <Typography className="body-paragraph" key={index} variant="body2" display="block">{paragraph}</Typography>
                )
              })}
            </CardContent>
          </Card>
        )
      })}
    </Container>
  )
}

export default Resume;
