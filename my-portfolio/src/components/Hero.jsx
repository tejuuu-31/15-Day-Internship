import "./Hero.jsx";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <h1>Hi, I'm Tejashwini</h1>

      <p>
        I'm a passionate engineering student with a love for
        web development and technology.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">
          View My Work
        </a>

        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;