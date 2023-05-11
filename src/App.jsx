import { Navbar } from "./components/Navbar";
import { Me } from "./components/Me";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Me></Me>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
