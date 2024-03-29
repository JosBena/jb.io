import React from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.min.css";
import { LinkBar } from "./sections/linkBar";
import { NavBars } from "./sections/navbars";
import { Home } from "./sections/homeSection";
import { Project } from "./sections/projectSec";

function App() {
  return (
    <div className="App">
      <LinkBar />
      <NavBars />
      <Home />
      <Project />
    </div>
  );
}

export default App;
