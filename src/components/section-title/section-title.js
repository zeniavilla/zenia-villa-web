import {Typography} from '@material-ui/core';
import React from 'react';
import '../../styles/section-title.scss';

function SectionTitle(props) {
  return (
    <div className="section-heading">
      <Typography variant={props.size || "h4"} className="section-title">{props.title}</Typography>
    </div>
  );
}

export default SectionTitle;
