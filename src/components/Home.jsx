import Button from "./Button";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <h3>Hey, I'm George👋</h3>
      <h1>
        <span style={{ color: "var(--accent)" }}>Front</span>
        <span>end Developer</span>
      </h1>
      <h3>
        Based in Greece, I create clean, engaging websites designed for optimal
        user experiences
      </h3>
      <div className="buttons">
        <button className="learn-more">
          <h3>
            <span style={{ color: "var(--heading)" }}>Learn More...</span>
          </h3>
        </button>
        <Button
          text={
            <h3>
              <span style={{ color: "var(--primary)" }}>My Projects</span>
            </h3>
          }
        />
      </div>
    </div>
  );
}
