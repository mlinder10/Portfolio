import { FaEnvelope, FaProjectDiagram } from "react-icons/fa";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.supertitle}>Fullstack Developer</p>
        <p className={styles.title}>Hi, I'm Matt</p>
        <p className={styles.subtitle}>
          I'm a senior computer science major at the University of South
          Carolina. I specialize in web development and have experience building
          mobile apps.
        </p>
        <div className={styles.links}>
          <a href="#contact" className={styles.contact}>
            <FaEnvelope />
            <span>Contact Me</span>
          </a>
          <a href="#experience" className={styles.experience}>
            <FaProjectDiagram />
            <span>See My Experience</span>
          </a>
        </div>
      </div>
    </section>
  );
}
