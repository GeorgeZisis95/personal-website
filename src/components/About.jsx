import "./About.css";
import hipsterImg from "../assets/hipster.png";

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef} id="about" className="about">
      <h2 className="title">
        <div>
          <span style={{ color: "var(--accent)" }}>About&nbsp;</span>
          <span>Me</span>
        </div>
      </h2>
      <p style={{ color: "var(--text)" }}>
        I’m a self-taught web developer with a strong focus on building clean,
        responsive, and user-friendly interfaces. I enjoy turning ideas into
        practical, functional digital experiences.
        <br />
        <br />I have hands-on experience with HTML, CSS, and JavaScript and I
        work mainly with modern tools and frameworks like React. I’m constantly
        learning and improving my skills through real-world projects and
        consistent practice.
        <br />
        <br />
        I come from a practical background, with experience in customer-facing
        environments, which helps me understand users, usability, and clear
        communication. I value clean code, attention to detail, and creating
        interfaces that feel intuitive and fast.
        <br />
        <br />I enjoy reading literature and exploring history, as well as
        learning about cultures and different time periods. I like being with
        friends, playing card games, and discovering new cafés, restaurants, and
        places to relax. These activities keep me curious, connected, and
        inspired.
      </p>
      <img src={hipsterImg} alt="knightImg" />
    </section>
  );
}
