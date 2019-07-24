import React from 'react';
import NavWrapper from "./Components/NavWrapper";
import './App.css';
import Subnav from "./Components/Subnav.js";

// console.log(Object.values(AppleData));

function App() {
  return (
    <div className="App" >
      <NavWrapper />
      <Subnav />
    </div>
  );
}

export default App;
