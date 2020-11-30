import React, {useState, useEffect} from 'react';

function FourthComponent() {
  const [title, setTile] = useState('Título antes dos 5 segundos!');

  useEffect(() => {
    function interval() {
      setTimeout(() => {
        setTile('Título depois dos 5 segundos!')
      }, 5000)  
    }

    interval();
  }, []);

  return (
    <div>
      <h1> {title} </h1>
    </div>
  );
}

export default FourthComponent;
