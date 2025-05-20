"use client";

import { useRef } from "react";
import Services from "./services/page";
import About from "./about/page";
import Experience from "./experience/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Home from "./home/page";
import NavBar from "./navbar/page";
import Projects from "./projects/page";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = (section) => {
    if (section === "home") homeRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "projects") projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "services") servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "experience") experienceRef.current?.scrollIntoView({ behavior: "smooth" });
    if (section === "contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-900">
      {/* Pass handleScroll function to NavBar */}
      <NavBar onNavigate={handleScroll} />
      <section ref={homeRef} id="home">
      <Home />
      </section>
      <br />
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <br />
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <br />
      <section ref={servicesRef} id="services">
        <Services />
      </section>
      <br />
      <section ref={experienceRef} id="experience">
        <Experience />
      </section>
      <br />
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
