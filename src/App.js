import './App.css';
// import Htm from './Test';
import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe'


function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [isClearCache, setIsClearCache] = useState(false);
  const [isDownloadTiny, setIsDownloadTiny] = useState(false);
  const [sessionText, setSessionText] = useState(sessionStorage.getItem('myText') || '');

  useEffect(() => {
    console.log("getting text")
    const handleStorageChange = () => {
      setSessionText(sessionStorage.getItem('myText') || '');
    };

    handleClickDownloadTiny();

    window.addEventListener('storage', handleStorageChange);

    // handleClickDownloadTiny();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Add event listener to window object
    window.addEventListener("onbeforeunload", clearSessionStorage);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("onbeforeunload", clearSessionStorage);
    };
  }, []);

  const clearSessionStorage = () => {
    sessionStorage.clear();
  };


  const handleClickToggle = () => {
    console.log("clicked")
    setIsTrue(prevIsTrue => !prevIsTrue);
    sessionStorage.setItem('isTrue', !isTrue);
  };

  const handleClickClearCache = () => {
    console.log("clicked cache")
    setIsClearCache(prevIsClearCache => !prevIsClearCache);
    sessionStorage.setItem('isClearCache', !isClearCache);
  };

  const handleClickDownloadTiny = () => {
    console.log("clicked download tiny")
    setIsDownloadTiny(prevIsDownloadTiny => !prevIsDownloadTiny);
    sessionStorage.setItem('isDownloadTiny', !isDownloadTiny);
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
        
        <button onClick={handleClickToggle}>Toggle</button>
        <button onClick={handleClickClearCache}>Clear Cache</button>
        <button onClick={handleClickDownloadTiny}>download Tiny model</button>

        <div>
          <p>{sessionText}</p>
        </div>

      </header>
    </div>
  );
}

export default App;
