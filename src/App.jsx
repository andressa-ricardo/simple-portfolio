import { Navbar } from "./components/Navbar";
import { Me } from "./components/Me";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./App.css";

window.addEventListener("scroll", function () {
  var scrollY = window.scrollY;

  if (scrollY > 100) {
    document.querySelector(".arrow").style.display = "block";
  } else {
    document.querySelector(".arrow").style.display = "none";
  }
});

function App() {
  return (
    <>
      <Navbar />
      <Me></Me>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
      <a href="#" className="arrow">
        <BsFillArrowUpSquareFill></BsFillArrowUpSquareFill>
      </a>
    </>
  );
}

export default App;
