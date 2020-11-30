import React, {useState, useEffect} from 'react';

import './ThirdComponent.css'

import tilapa from './assets/tilapa.png';
import tilapiaFrita from './assets/tilapa-frita.jpg';

function ThirdComponent() {
  const [fryTilapa, setFryTilapa] = useState(tilapa);

  return (
    <div className="third-component-box">
      <img className="third-component-img" src={fryTilapa} alt=""/>
      <button className="third-component-button" onClick={() => setFryTilapa(tilapiaFrita)}>Frite a tilapa</button>
    </div>
  );
}

export default ThirdComponent;