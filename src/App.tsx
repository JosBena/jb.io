import React from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.min.css";
import { LinkBar } from "./sections/linkBar";
import { NavBars } from "./sections/navbars";
import { Home } from "./sections/homeSec";
import { Project } from "./sections/projectSec";
import { Experience } from "./sections/expSec";
import { Skills } from "./sections/skillsSec";
import { AboutMe } from "./sections/aboutMeSec";
import { GetInTouch } from "./sections/getInTouchSec";
import { Foot } from "./sections/footSec";

//still need to finish Skills, switch pictures and add more to project list
function App() {
  return (
    <div className="App">
      <LinkBar />
      <NavBars />
      <Home />
      <Project />
      <Experience />
      <Skills />
      <AboutMe />
      <GetInTouch />
      <Foot />
    </div>
  );
}

export default App;
