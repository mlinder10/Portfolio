import ReactDOM from "react-dom/client";
import "./index.css";
import Experience from "./sections/Experience.tsx";
import Contact from "./sections/Contact.tsx";
import Home from "./sections/Home.tsx";
import { StrictMode } from "react";
import Navbar from "./components/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <main>
      <Home />
      <Experience />
      <Contact />
    </main>
  </StrictMode>
);
