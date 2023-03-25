import './App.css';
// import Htm from './Test';
import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe'


function App() {
  const [isTrue, setIsTrue] = useState(false);

  const [sessionText, setSessionText] = useState(sessionStorage.getItem('myText') || '');

  useEffect(() => {
    console.log("getting text")
    const handleStorageChange = () => {
      setSessionText(sessionStorage.getItem('myText') || '');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleClick = () => {
    console.log("clicked")
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

        <div>
          <p>{sessionText}</p>
        </div>

      </header>
    </div>
  );
}

export default App;
