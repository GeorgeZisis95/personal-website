import { useEffect, useState } from "react";
import "./Navigation.css";
import homeImg from "../assets/home.svg";
import aboutImg from "../assets/about.svg";
import skillsImg from "../assets/skills.svg";
import projectsImg from "../assets/projects.svg";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a onClick={scrollToTop} className="logo">
        <span style={{ color: "var(--heading)" }}>George </span>
        <span style={{ color: "var(--accent)" }}>Zisis</span>
      </a>

      <div className="nav-buttons">
        <Button img={homeImg} text={"Home"} />
        <Button img={aboutImg} text={"About"} />
        <Button img={skillsImg} text={"Skills"} />
        <Button img={projectsImg} text={"Projects"} />
      </div>
    </nav>
  );
}

function Button({ img, text }) {
  const id = `#${text.toLowerCase()}`;
  return (
    <a href={id} className="button">
      <img src={img} alt={text} />
      <span style={{ color: "var(--heading)" }}>
        <p>{text}</p>
      </span>
    </a>
  );
}
