
import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import "./styles.css";
import ProjectBox from "./ProjectBox";

const App = () => {
  const projects = [
    {
      title: "Fantasy Football Front End",
      imageSrc: "/homepage.png",
      description: "Initiate the scraping, choose your football preferences, and see your final results all in this slick front end.",
      link: "https://github.com/juukeox/FantasyFooty",
    },
    {
      title: "Fantasy Football Back End",
      imageSrc: "/scraping.png",
      description: "The flask app takes on sophisticated scraping, and processes your inputs via a complex algorithm to generate normalised scores for recommended players.",
      link: "https://github.com/juukeox/FantasyFooty",
    },
    {
      title: "Sudoku Game",
      imageSrc: "/sudoku.png",
      description: "Load up a new board each time you open and see how fast you can win!",
      link: "https://github.com/juukeox/Sudoku",
    },
    {
      title: "Hangman Game",
      imageSrc: "/hangman.png",
      description: "Choose your difficulty and take on the dictionary before you run out of lives!",
      link: "https://github.com/juukeox/Hangman-game",
    },
    {
      title: "Helpful To-do List",
      imageSrc: "/TodoList.png",
      description: "Add and complete tasks to keep track of your day. Remembers your tasks even after you close!",
      link: "https://github.com/juukeox/TodoList",
    }
  ];
  return (
    <div className="App">
      <header className="Header">
        <div className="TitleBox">
          <h1 className="Name">John Wilson</h1>
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
              link={project.link}
            />
          ))} 
        </div>
      </section>
      <section className="ProjectsContainer" id="skills">
  <h2 className="SectionTitle">Skills</h2>
  <div className="SkillsInnerContainer">
    <div className="SkillsColumns">
      <div className="SkillsColumn">
        <h4>Proficient</h4>
        <div className="ProficientGrid">
          <div className="Skill">
            <i className="fas fa-code"></i>
            <h3>Python</h3>
            <p>Creating efficient and maintainable solutions</p>
          </div>
          <div className="Skill">
            <i className="fab fa-html5"></i>
            <h3>HTML</h3>
            <p>Crafting structured and semantic web content</p>
          </div>
          <div className="Skill">
            <i className="fab fa-js"></i>
            <h3>JavaScript</h3>
            <p>Designing dynamic and responsive web applications</p>
          </div>
          <div className="Skill">
            <i className="fab fa-python"></i>
            <h3>Flask</h3>
            <p>Building web apps with Python for powerful backends</p>
          </div>
        </div>
      </div>
      <div className="SkillsColumn">
        <h4>Familiar</h4>
        <div className="FamiliarGrid">
          <div className="Skill1">
            <i className="fab fa-java"></i>
            <h3>Java</h3>
            <p>Creating robust and platform-independent applications</p>
          </div>
          <div className="Skill1">
            <i className="fab fa-css3-alt"></i>
            <h3>CSS</h3>
            <p>Styling websites for appealing user experiences</p>
          </div>
          <div className="Skill1">
            <i className="fab fa-react"></i>
            <h3>React</h3>
            <p>Developing interactive user interfaces with ease</p>
          </div>
          <div className="Skill1">
            <i className="fab fa-docker"></i>
            <h3>Docker</h3>
            <p>Containerizing applications for seamless deployment</p>
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
          <br></br>
          <p>
            CV available upon request.
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