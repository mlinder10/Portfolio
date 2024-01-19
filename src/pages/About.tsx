import Reveal from "../components/Reveal";
import styles from "../styles/about.module.css";

const options = { delay: 0.3, duration: 0.8 };

export default function About() {
  return (
    <section className={styles.main} id="about">
      <Reveal from="left" {...options}>
        <img src="/book.jpeg" alt="" />
      </Reveal>
      <Reveal from="top" {...options}>
        <div className={styles["text-container"]}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.text}>
            {`
            I'm currently a junior at the University of South Carolina, where I
            study computer science and psychology. I have a passion for learning
            new ideas and technologies. As a consequence, I spend the majority
            of my free time reading books, listening to podcasts, and building
            things. Here are some of the places that my interest lies at the
            moment.
            `}
          </p>
        </div>
      </Reveal>
      <Reveal from="bottom" {...options}>
        <img src="/podcast.png" alt="" />
      </Reveal>
      <Reveal from="right" {...options}>
        <img src="/keyboard.png" alt="" />
      </Reveal>
    </section>
  );
}
