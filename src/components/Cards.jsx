import javascriptImg from "../assets/skills/javascript.svg";
import cssImg from "../assets/skills/css.svg";
import htmlImg from "../assets/skills/html.svg";
import reactImg from "../assets/skills/react.svg";
import figmaImg from "../assets/skills/figma.svg";
import viteImg from "../assets/skills/vite.svg";
// import pythonImg from "../assets/skills/python.svg";
import gitImg from "../assets/skills/git.svg";
import webpackImg from "../assets/skills/webpack.svg";
import vercelImg from "../assets/skills/vercel.svg";

export const cards = [
  {
    id: 1,
    title: "Landing Page",
    desc: "Real world project for the monastery of Saint Kosmas Thermon",
    images: [
      reactImg,
      javascriptImg,
      gitImg,
      cssImg,
      viteImg,
      figmaImg,
      vercelImg,
    ],
    websiteLink: "https://monastery-saint-kosmas-thermo.vercel.app/",
    githubLink:
      "https://github.com/GeorgeZisis95/monastery-saint-kosmas-thermo",
  },
  {
    id: 2,
    title: "Calculator",
    desc: "A simple yet sleek calculator built with vanilla JavaScript",
    images: [javascriptImg, htmlImg, cssImg, gitImg, webpackImg, vercelImg],
    websiteLink: "https://zisis-calculator.vercel.app/",
    githubLink: "https://github.com/GeorgeZisis95/calculator-js",
  },
  {
    id: 3,
    title: "Tictactoe",
    desc: "Modern & Responsive TicTacToe",
    images: [javascriptImg, htmlImg, cssImg, gitImg, vercelImg],
    websiteLink: "https://zisis-tictactoe.vercel.app/",
    githubLink: "https://github.com/GeorgeZisis95/tic-tac-toe-js",
  },
];
