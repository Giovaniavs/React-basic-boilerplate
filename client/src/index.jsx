import React from 'react';
import ReactDOM from 'react-dom';
import {
  FirstComponent,
  SecondComponent,
  ThirdComponent,
  FourthComponent,
} from './components'

function App() {
  return (
    <div className="app">
      <FirstComponent />
      <SecondComponent backgroundColor="second-component-box-red" title="Esse é o segundo componente!"/>
      <ThirdComponent />
      <FourthComponent />
    </div>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));
