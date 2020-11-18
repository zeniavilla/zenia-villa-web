import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  sectionTitle: {
    position: 'relative',
    fontWeight: '600',
    paddingTop: '20px',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '30px',
      height: 0,
      top: 0,
      borderBottom: '2px solid #000',
    }
  },
  sectionHeading: {
    marginBottom: '30px',
  },
}));

function SectionTitle(props) {
  const classes = useStyles();
  return (
    <div className={classes.sectionHeading}>
      <Typography variant={props.size || "h4"} className={classes.sectionTitle}>{props.title}</Typography>
    </div>
  );
}

export default SectionTitle;
