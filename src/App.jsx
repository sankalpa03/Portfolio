import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/ContactUs";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
