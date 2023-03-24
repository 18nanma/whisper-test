import './App.css';
// import Htm from './Test';
import { initialize } from 'wasm-themis';
import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    initialize().then(() => {
        console.log("Themis initialized");
    }).catch( err => {
        // Themis initialization must be only once.
    })
}, []);
  return (
    <div className="App">
      <header className="App-header">
        

        {/* <Htm/> */}
        Hello
        
      </header>
    </div>
  );
}

export default App;
