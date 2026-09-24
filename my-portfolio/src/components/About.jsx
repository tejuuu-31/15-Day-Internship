import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>

      <div className="about-content">
        <figure className="profile-figure">
          <img
            src="/profile.webp"
            alt="Tejashwini profile"
          />

          <figcaption>
            Tejashwini - Engineering Student
          </figcaption>
        </figure>

        <div className="about-text">
          <p>
            I am currently pursuing my engineering degree at
            Ramaiah Academy. I have a strong interest in web
            development, particularly in building responsive and
            user-friendly websites. I am always eager to learn new
            skills and take on challenging projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;