import React from 'react';

import './SecondComponent.css';

function SecondComponent(props) {

  return (
    <div className={props.backgroundColor}>
      <h1 className="second-component-title">{props.title}</h1>
    </div>
  );
}

export default SecondComponent;
