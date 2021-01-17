import {Typography} from '@material-ui/core';
import React from 'react';
import '../../../styles/project.scss';

function getImages(imageSections) {
  return imageSections.map((section, i) => {
    return (
      <div key={i} className="sub-section">
        <img className="project-image" src={section.source} alt={section.altText || section.caption} />
        <Typography className="image-caption" variant="caption">{section.caption}</Typography>
      </div>
    )
  });
}

function ProjectDetails(props) {
  const {title, opportunity, projectRole, images, summary, timeline} = props;

  return (
    <section className="project-section">
      <Typography className="sub-section" variant="h5">{title}</Typography>
      <div className="sub-section">
        <Typography variant="h6">Opportunity</Typography>
        <Typography variant="body1">{opportunity}</Typography>
      </div>
      <div className="sub-section">
        <Typography variant="h6">Role</Typography>
        {projectRole.map((paragraph, i) => <Typography key={i} variant="body1">{paragraph}</Typography>)}
      </div>
      <div className="sub-section">
        <Typography variant="h6">Summary</Typography>
        {summary.map((paragraph, i) => <Typography key={i} variant="body1">{paragraph}</Typography>)}
      </div>
      <div className="sub-section">
        <Typography variant="h6">Timeline</Typography>
        <Typography variant="body1">{timeline}</Typography>
      </div>
      {getImages(images)}
    </section>
  )
}

export default ProjectDetails;
