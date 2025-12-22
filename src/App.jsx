import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { useRef } from "react";

export default function App() {
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Navigation />
      <Home contactRef={contactRef} projectsRef={projectsRef} />
      <About />
      <Skills />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}
