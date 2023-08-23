import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import "./styles.css";
import ProjectBox from "./ProjectBox";

const App = () => {
  const projects = [
    {
      title: "Fantasy Footy Pt.1",
      imageSrc: "/homepage.png",
      description: "Description of Project 1...",
    },
    {
      title: "Fantasy Footy Pt.2",
      imageSrc: "/scraping.png",
      description: "Description of Project 2...",
    },
    {
      title: "Fantasy Footy Pt.3",
      imageSrc: "/dashboard.png",
      description: "Description of Project 3...",
    },
    // Add more projects as needed
  ];
  return (
    <div className="App">
      <header className="Header">
        <div className="TitleBox">
          <h1 className="Name">Brendan Jones</h1>
          <p className="Tagline">Software Developer | Code Enthusiast</p>
        </div>
      </header>
      <nav className="Navigation">
        <ul className="NavList">
          <li className="NavItem">
            <a className="NavLink" href="#projects">
              Projects
            </a>
          </li>
          <li className="NavItem">
            <a className="NavLink" href="#skills">
              Skills
            </a>
          </li>
          <li className="NavItem">
            <a className="NavLink" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <section className="ProjectsContainer" id="projects">
        <h2 className="SectionTitle">Projects</h2>
        <div className="ProjectsInnerContainer">    
          {projects.map((project, index) => (
            <ProjectBox
              key={index}
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
            />
          ))} 
        </div>
      </section>
      <section className="ProjectsContainer" id="skills">
        <h2 className="SectionTitle">Skills</h2>
        <div className="ProjectsInnerContainer">
         <p>These are my skills:</p>
         <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          {/* Add more skills as needed */}
        </ul>
        </div>
      </section>
      <footer className="Footer" id="contact">
        <div className="ContactInfo">
          <h2 className="SectionTitle">Contact</h2>
          <p>
            For work inquiries, please email me at{" "}
            <a href="mailto:malachikakembo@gmail.com">
            <strong>malachikakembo@gmail.com</strong>
            </a>
          </p> 
        </div>
        <div className="SocialLinks">
          <a href="https://github.com/juukeox" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> My GitHub    {/* Not showing icon*/}
          </a>
          </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));