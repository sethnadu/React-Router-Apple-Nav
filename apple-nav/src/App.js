import React, {useState} from 'react';
import NavWrapper from "./Components/NavWrapper";
import './App.css';
import Subnav from "./Components/Subnav.js";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import {AppleData} from "./Components/data.js";


// const [subNav, setSubNav] = useState();
// console.log(Object.values(AppleData));

function App() {
  return (
    <Router>
    <div className="App" >
       <NavWrapper />
        

    </div>

    </Router>
  );
}

export default App;
