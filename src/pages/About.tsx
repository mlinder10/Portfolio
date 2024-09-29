import Reveal from "../components/Reveal";
import styles from "../styles/about.module.css";
import pong from "../assets/pong.jpeg";
import book from "../assets/book.jpeg";
import keyboard from "../assets/keyboard.png";

export default function About() {
  return (
    <section className={styles.main} id="about">
      <div className={styles.gradient} />
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.columns}>
        <Reveal from="left">
          <p className={styles.text}>
            {`
              I'm currently a junior at the University of South Carolina, where I
              study computer science and psychology. I have a passion for
              learning. As a consequence, I spend the majority of my free time
              reading books, listening to podcasts, and building things. Here are
              some of the places that my interest lies at the moment.
            `}
          </p>
        </Reveal>
        <div className={styles.imgs}>
          <Reveal width="100%" className={styles.book} delay={0.3}>
            <img className={styles.img} src={pong} alt="" />
          </Reveal>
          <Reveal width="100%" className={styles.podcast} delay={0.4}>
            <img className={styles.img} src={book} alt="" />
          </Reveal>
          <Reveal width="100%" className={styles.keyboard}>
            <img className={styles.img} src={keyboard} alt="" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
