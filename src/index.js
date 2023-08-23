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
  <div className="SkillsInnerContainer">
    <h3 className="SkillsSubtitle">Master of Code, Wielder of Knowledge</h3>
    <div className="SkillsColumns">
      <div className="SkillsColumn">
        <h4>Proficient</h4>
        <div className="ProficientGrid">
          <div className="Skill">
            <i className="fas fa-code"></i>
            <h3>Python</h3>
            <p>Fluent in the language of snakes</p>
          </div>
          <div className="Skill">
            <i className="fab fa-react"></i>
            <h3>React</h3>
            <p>Building interactive web experiences</p>
          </div>
          <div className="Skill">
            <i className="fab fa-js"></i>
            <h3>JavaScript</h3>
            <p>Scripting the web like a magician</p>
          </div>
        </div>
      </div>
      <div className="SkillsColumn">
        <h4>Familiar</h4>
        <div className="FamiliarGrid">
          <div className="Skill1">
            <i className="fab fa-html5"></i>
            <h3>HTML</h3>
            <p>Building the foundation of the web</p>
          </div>
          <div className="Skill1">
            <i className="fab fa-java"></i>
            <h3>Java</h3>
            <p>Bringing the coffee to your code</p>
          </div>
          <div className="Skill1">
            <i className="fab fa-css3-alt"></i>
            <h3>CSS</h3>
            <p>Designing stunning web styles</p>
          </div>
        </div>
      </div>
    </div>
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