import "./Home.css";

export default function Home({ contactRef, projectsRef }) {
  const scrollToContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () =>
    projectsRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="home">
      <p style={{ color: "var(--text)" }}>Hey, I'm George👋</p>
      <h1>
        <span style={{ color: "var(--accent)" }}>Front</span>
        <span>end Developer</span>
      </h1>
      <p style={{ color: "var(--text)" }}>
        Based in Greece, I create clean, engaging websites designed for optimal
        user experiences
      </p>
      <div className="buttons">
        <button onClick={scrollToContact} className="contact-button">
          <p>Contact Me</p>
        </button>
        <button onClick={scrollToProjects} className="projects-button">
          <p>My Projects</p>
        </button>
      </div>
    </section>
  );
}
