import styles from "../styles/home.module.css";
import { FaApple, FaCode, FaReact } from "react-icons/fa"

export default function Home() {
  return (
    <section className={styles.main} id="home">
      <div className={styles.left}>
        <p className={styles.title}>{"Hi, I'm Matt"}</p>
        <p className={styles.subtitle}>Software Engineer</p>
        <div className={styles.links}>
          <a href="#contact" className={styles.contact}>Contact Me</a>
          <a href="#projects" className={styles.projects}>View Projects</a>
        </div>
        <FaCode className={`${styles.icon} ${styles.code}`} />
        <FaApple className={`${styles.icon} ${styles.apple}`} />
        <FaReact className={`${styles.icon} ${styles.react}`} />
      </div>
      <div className={styles.right}>
        <img src="/headshot.png" alt="" className={styles.img} />
      </div>
    </section>
  );
}
