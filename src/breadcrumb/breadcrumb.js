import React from 'react';

import './breadcrumb.scss';

function Breadcrumb({ title, color }) {
  return (
    <div
      className={`breadcrumb-wrapper ${
        color ? 'breadcrumb-' + color : 'breadcrumb-blue'
      }`}
    >
      {title}
    </div>
  );
}

export default Breadcrumb;
