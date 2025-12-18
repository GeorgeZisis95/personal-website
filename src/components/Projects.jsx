import "./Projects.css";
import { cards } from "./Cards";

export default function Projects({ projectsRef }) {
  return (
    <section ref={projectsRef} id="projects" className="projects">
      <h2 className="title">
        <div>
          <span>Proje</span>
          <span style={{ color: "var(--accent)" }}>ct</span>
          <span>s</span>
        </div>
      </h2>
      <div className="project-container">
        {cards.map((card) => (
          <ProjectCard
            key={card.id}
            title={card.title}
            desc={card.desc}
            images={card.images}
            websiteLink={card.websiteLink}
            githubLink={card.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, images, websiteLink, githubLink }) {
  return (
    <div className="project-card">
      <h3 className="card-title">{title}</h3>
      <p style={{ color: "var(--text)" }}>{desc}</p>
      <div className="made-with-container">
        <p>Made With:</p>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={src} />
        ))}
      </div>
      <div className="link-buttons">
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          <p>Website</p>
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          <p>Github</p>
        </a>
      </div>
    </div>
  );
}
