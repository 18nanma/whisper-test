import './App.css';
// import Htm from './Test';
import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe'


function App() {
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    setIsTrue(prevIsTrue => !prevIsTrue);
    sessionStorage.setItem('isTrue', !isTrue);
  };
  return (
    <div className="App">
      <header className="App-header">
        
      <Iframe url="https://18nanma.github.io/whisper"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
        
        <button onClick={handleClick}>Toggle</button>

      </header>
    </div>
  );
}

export default App;
