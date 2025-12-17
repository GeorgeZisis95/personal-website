import "./Skills.css";
import javascriptImg from "../assets/skills/javascript.svg";
import cssImg from "../assets/skills/css.svg";
import htmlImg from "../assets/skills/html.svg";
import reactImg from "../assets/skills/react.svg";
import figmaImg from "../assets/skills/figma.svg";
import viteImg from "../assets/skills/vite.svg";
import pythonImg from "../assets/skills/python.svg";
import gitImg from "../assets/skills/git.svg";
import webpackImg from "../assets/skills/webpack.svg";
import vercelImg from "../assets/skills/vercel.svg";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>
        <span>My</span>
        <span style={{ color: "var(--accent)" }}>Skills</span>
      </h2>
      <div className="skills-container">
        <Card img={javascriptImg} text={"Javascript"} />
        <Card img={cssImg} text={"CSS"} />
        <Card img={htmlImg} text={"HTML"} />
        <Card img={reactImg} text={"React"} />
        <Card img={figmaImg} text={"Figma"} />
        <Card img={viteImg} text={"Vite"} />
        <Card img={pythonImg} text={"Python"} />
        <Card img={gitImg} text={"Git"} />
        <Card img={webpackImg} text={"Webpack"} />
        <Card img={vercelImg} text={"Vercel"} />
      </div>
    </section>
  );
}

function Card({ img, text }) {
  return (
    <div className="card">
      <img src={img} alt={text} />
      <span>{text}</span>
    </div>
  );
}
