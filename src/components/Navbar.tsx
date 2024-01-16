import { useEffect, useState } from "react";
import styles from "../styles/components/navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function checkScroll() {
      setIsOpen(window.scrollY < 60);
    }
    
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles.open : styles.closed}`}
    >
      <nav>
        <ul className={styles.ul}>
          <div className={styles.left}>
            <li>
              <a href="#">Matt Linder</a>
            </li>
          </div>
          <div className={styles.right}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className={styles.resume}>
              <a href="/Resume.pdf" target="_blank">
                Resume
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
