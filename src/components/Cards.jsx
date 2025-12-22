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
    title: "Library App",
    desc: "Manage and tracks books with a clean interface",
    images: [javascriptImg, htmlImg, cssImg, gitImg, vercelImg],
    websiteLink: "https://book-collection-app-ruby.vercel.app/",
    githubLink: "https://github.com/GeorgeZisis95/book-collection-app",
  },
  {
    id: 3,
    title: "Tictactoe",
    desc: "Modern & Responsive TicTacToe",
    images: [javascriptImg, htmlImg, cssImg, gitImg, vercelImg],
    websiteLink: "https://zisis-tictactoe.vercel.app/",
    githubLink: "https://github.com/GeorgeZisis95/tic-tac-toe-js",
  },
  {
    id: 4,
    title: "Sketchpad",
    desc: "A fun, interactive sketchpad that lets you draw on a colorful grid!",
    images: [javascriptImg, htmlImg, cssImg, gitImg, vercelImg],
    websiteLink: "https://sketchpad-js.vercel.app/",
    githubLink: "https://github.com/GeorgeZisis95/sketchpad-js",
  },
  {
    id: 5,
    title: "Rock Paper Scissors",
    desc: "A modern, fun Rock-Paper-Scissors game built with HTML, CSS, and JavaScript.",
    images: [javascriptImg, htmlImg, cssImg, gitImg, vercelImg],
    websiteLink: "https://zisis-rock-paper-scissors.vercel.app/",
    githubLink: "https://github.com/GeorgeZisis95/rock-paper-scissors-js",
  },
  {
    id: 6,
    title: "Calculator",
    desc: "A simple yet sleek calculator built with vanilla JavaScript",
    images: [javascriptImg, htmlImg, cssImg, gitImg, webpackImg, vercelImg],
    websiteLink: "https://zisis-calculator.vercel.app/",
    githubLink: "https://github.com/GeorgeZisis95/calculator-js",
  },
];
