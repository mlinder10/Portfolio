import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
