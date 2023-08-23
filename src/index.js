import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <header className="Header">
        <div className="TitleBox">
          <h1 className="Name">Brendan Jones</h1>
          <p className="Tagline">Web Developer | Code Enthusiast</p>
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
      <section className="Projects" id="projects">
        <h2 className="SectionTitle">Featured Projects</h2>
        {/* Add your project showcase here */}
      </section>
      <section className="Skills" id="skills">
        <h2 className="SectionTitle">Skills</h2>
        {/* Add your skills section here */}
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
          <a href="https://github.com/juukeox">
            <i className="fab fa-github"></i> My GitHub
          </a>
          </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));