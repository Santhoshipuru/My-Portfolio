import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Training from "../components/Training";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ExtraCurricular from "../components/ExtraCurricular";
import Coursework from "../components/Coursework";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Portfolio = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Training />
      <ExtraCurricular />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
