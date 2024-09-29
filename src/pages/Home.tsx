import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import styles from "../styles/home.module.css";
import background from "../assets/background.png";

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    function getPageHeight() {
      setPageHeight(window.innerHeight);
    }

    function getScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener("resize", getPageHeight);
    window.addEventListener("scroll", getScroll);

    return () => {
      window.removeEventListener("resize", getPageHeight);
      window.removeEventListener("scroll", getScroll);
    };
  }, []);

  function calculateOpacity() {
    if (scroll < 0) return 1;
    if (scroll > pageHeight / 1.5) return 0;
    return 1 - scroll / (pageHeight / 1.5);
  }

  return (
    <section className={styles.main} id="home">
      <img
        src={background}
        alt=""
        className={styles.img}
        style={{
          opacity: `${calculateOpacity()}`,
        }}
      />
      <Reveal duration={0.7}>
        <div className={styles["content-container"]}>
          <p className={styles.title}>{"Hi, I'm Matt"}</p>
          <p className={styles.subtitle}>Software Engineer</p>
          <div className={styles.links}>
            <a href="#contact" className={styles.contact}>
              Contact Me
            </a>
            <a href="#projects" className={styles.projects}>
              View Projects
            </a>
          </div>
        </div>
      </Reveal>
      <div className={styles.right}></div>
    </section>
  );
}
