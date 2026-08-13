import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

import Home from "./Pages/Home/Homescreeen";
import Herosection from "./Pages/Home/Herosection";
function App() {
  return (
    <>
      
      <Herosection />
    </>
  );
}
export default App;
