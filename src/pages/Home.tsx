import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import styles from "../styles/home.module.css";

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

  function calculateScale() {
    if (scroll < 0) return 1;
    if (scroll > pageHeight) return 3;
    return 1 + (scroll / pageHeight) * 2;
  }

  function calculateOpacity() {
    if (scroll < 0) return 1;
    if (scroll > pageHeight) return 0;
    return 1 - (scroll / pageHeight)
  }

  return (
    <section className={styles.main} id="home">
      <div className={styles["img-container"]}>
        <img
          src="https://images.ctfassets.net/ffdmbwkg5tsk/cftI1Mq0WcEly4qgRIlao/7a396331c26d8e78b33b1f496fcf6e7e/photo-1542435503-956c469947f6?w=1920&q=100&fm=png&bg=rgb%3A000000"
          alt=""
          className={styles.img}
          style={{ scale: `${calculateScale()}`, opacity: `${calculateOpacity()}` }}
        />
      </div>
      <Reveal>
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
