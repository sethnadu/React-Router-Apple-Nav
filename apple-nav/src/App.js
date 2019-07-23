import React from 'react';
import NavWrapper from "./Components/NavWrapper";
import './App.css';
import { AppleData } from "./Components/data.js"

console.log(AppleData);

function App() {
  return (
    <div className="App" >
      <NavWrapper />
    </div>
  );
}

export default App;
