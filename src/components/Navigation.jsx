import "./Navigation.css";
import homeImg from "../assets/home.svg";
import aboutImg from "../assets/about.svg";
import skillsImg from "../assets/skills.svg";
import projectImg from "../assets/projects.svg";

export default function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <a onClick={scrollToTop} className="logo">
        <span style={{ color: "var(--heading)" }}>George </span>
        <span style={{ color: "var(--accent)" }}>Zisis</span>
      </a>
      <div className="nav-buttons">
        <Button img={homeImg} text={"Home"} />
        <Button img={aboutImg} text={"About"} />
        <Button img={skillsImg} text={"Skills"} />
        <Button img={projectImg} text={"Projects"} />
      </div>
    </nav>
  );
}

function Button({ img, text }) {
  return (
    <div className="button">
      <img src={img} alt={text} />
      <a>{text}</a>
    </div>
  );
}
