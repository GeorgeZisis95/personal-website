import Button from "./Button";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <p>Hey, I'm George👋</p>
      <h1>
        <span style={{ color: "var(--accent)" }}>Front</span>
        <span>end Developer</span>
      </h1>
      <p>
        Based in Greece, I create clean, engaging websites designed for optimal
        user experiences
      </p>
      <div className="buttons">
        <button className="learn-more">Learn More...</button>
        <Button text={"My Projects"} />
      </div>
    </section>
  );
}
