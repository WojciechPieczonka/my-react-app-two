import "./App.css";
import Logo from "./components/Logo/Logo";
import Name from "./components/Name/Name";
import Calc from "./components/Calc/Calc";
import React, { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <body>
        <div className="center">
          <div className="main">
            <Logo></Logo>
            <Name></Name>
          </div>
          <Calc></Calc>
        </div>
      </body>
    </div>
  );
}

export default App;
