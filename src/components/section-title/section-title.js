import {Typography} from '@material-ui/core';
import React from 'react';
import '../../styles/section-title.scss';

function SectionTitle(props) {
  const {size, title, subtitle, link, linkText} = props;
  return (
    <div className="section-heading">
      <Typography variant={size || "h4"} className="section-title">{title}</Typography>
      {
        subtitle ?
        <Typography variant="subtitle1">{subtitle}</Typography> :
        ''
      }
      {
        link ?
        <a href={link}>{linkText}</a> :
        ''
      }
    </div>
  );
}

export default SectionTitle;
