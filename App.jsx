import React from "react";
import { Link } from 'react-scroll';
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Section id="about" title="About Me">
        <p>
          
        Hi, I'm Nikoloz Alimbarashvili — a Java developer with a strong foundation in computer science and hands-on experience building dynamic, responsive web applications. I’m passionate about crafting clean code, intuitive interfaces, and staying up-to-date with modern web and app development trends.</p>
        <br />
        <p>Feel free to explore my work, and reach out if you'd like to connect or collaborate.</p>
      </Section>
      <Projects />
      <Skills />
      <Section id="contact" title="Contact">
        <p>
          Connect with me on <a href="https://www.linkedin.com/in/nikoloz-alimbarashvili">LinkedIn</a>.
        </p>
        <p>
          Connect with me on <a href="https://github.com/alimbaraa">GitHub</a>.
        </p>
        <p>
          Resume: <a href="https://docs.google.com/document/d/1GFuO4h4JRVxo1e3I0WLrbHB6HPHM65Zv/edit?usp=drive_link&ouid=110799324895784122426&rtpof=true&sd=true">Resume</a>.
        </p>
      </Section>
    </div>
  );
};

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-50}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-50}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-50}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="hero">
    <h1>Hi, I'm Nikoloz Alimbarashvili</h1>
    <p>Java Developer | Back-End Developer | Web Developer</p>
  </section>
);

const Section = ({ id, title, children }) => (
  <section id={id}>
    <h2>{title}</h2>
    {children}
  </section>
);

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project-grid">
       {[1, 2, 3, 4].map((num) => (
        <div key={num} className="project-item">
          {/* { <img src={`project${num}.jpg`} alt={`Project ${num}`} /> } */}
          <h3>Project Title {num}</h3>
          <p>Short description of Project {num}.</p>
        </div>
      ))}
    </div>
  </section>
);

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>Java</li>
      <li>Javascript</li>
      <li>C++</li>
      <li>HTML & CSS</li>
      <li>Spring Boot</li>
      <li>React</li>
      <li>MySQL</li>
      <li>Unity 3D</li>
      <li>GitHub</li>
      
    </ul>
  </section>
);

export default App;
