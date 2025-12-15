import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
    </>
  );
}
