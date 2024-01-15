import { useEffect, useState } from "react";
import styles from "../styles/components/navbar.module.css";

export default function Navbar() {
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [pageHeight, setPageHeight] = useState<number>(0);

  const isOpen = () => {
    if (scrollPos < 60) return true;
    return false;
  };

  const isActive = (index: number) => {
    if (scrollPos < 0 && index === 0) return true;
    if (scrollPos >= index * pageHeight && scrollPos < (index + 1) * pageHeight)
      return true;
    return false;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });

    window.addEventListener("resize", () => {
      setPageHeight(window.innerHeight);
    });
  }, []);

  return (
    <header
      className={`${styles.header} ${isOpen() ? styles.open : styles.closed}`}
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
              <a href="#" className={isActive(0) ? styles.active : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className={isActive(1) ? styles.active : ""}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className={isActive(2) ? styles.active : ""}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className={isActive(3) ? styles.active : ""}>
                Contact
              </a>
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
