import "./Contact.css";
import githubImg from "../assets/github.svg";
import linkedinImg from "../assets/linkedin.svg";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="title">
        <div>
          <span style={{ color: "var(--accent)" }}>Contact&nbsp;</span>
          <span>Me</span>
        </div>
      </h2>
      <div className="contact-container">
        <div className="email-link">
          <p style={{ color: "var(--text)" }}>Write me an e-mail at:</p>
          <h3>georgezisis@gmail.com</h3>
        </div>
        <p style={{ color: "var(--text)" }}>
          Or reach me through social media:
        </p>
        <div className="sm-links-buttons">
          <a href="https://github.com/GeorgeZisis95">
            <img src={githubImg} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/george-zisis-front-end/">
            <img src={linkedinImg} alt="linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}
