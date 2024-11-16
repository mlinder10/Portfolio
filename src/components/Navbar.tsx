import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { debounce } from "lodash";

export default function Navbar() {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const pageHeight = document.documentElement.clientHeight;
      setBlur(window.scrollY >= pageHeight / 2);
    });

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${blur ? styles.blur : ""}`}>
      <nav className={styles.nav}>
        <a href="#">Matt Linder</a>
        <div className={styles.links}>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" className={styles.resume}>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
