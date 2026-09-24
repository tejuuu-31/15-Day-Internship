import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">

        <article className="project-card">
          <img
            src="https://th.bing.com/th/id/OIP.W81pUm4Cky36gAu4f7poQgHaFj?r=0&o=7rm=3&rs=1&pid=ImgDetMain"
            alt="Weather App"
          />

          <h3>Weather App</h3>

          <p>
            A web application that provides real-time weather
            information for any location.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>API</span>
          </div>

          <a href="#" className="project-btn">
            Live Demo
          </a>

          <a
            href="https://github.com/tejuuu-31"
            className="project-btn"
          >
            GitHub
          </a>
        </article>

        <article className="project-card">
          <img
            src="https://www.shutterstock.com/image-vector/calculator-app-cartoon-smartphone-interface-600nw-1791440807.jpg"
            alt="Calculator App"
          />

          <h3>Calculator App</h3>

          <p>
            A simple calculator application for basic arithmetic
            operations.
          </p>

          <div className="project-tags">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <a href="#" className="project-btn">
            Live Demo
          </a>

          <a
            href="https://github.com/tejuuu-31"
            className="project-btn"
          >
            GitHub
          </a>
        </article>

      </div>
    </section>
  );
}

export default Projects;