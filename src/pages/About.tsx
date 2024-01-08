import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section className={styles.main} id="about">
      <div className={styles.top}>
        <h1>About Me</h1>
        <p>
          I’m currently a junior at the University of South Carolina, where I
          study computer science and psychology. I love learning about new
          technologies and ideas and as a consequence, I spend the majority of
          my free time reading books, listening to podcasts, and building things
          (my house is littered with Arduino components and 3d prints).
        </p>
      </div>
      <div className={styles.columns}>
        <div>
          <h3 className={styles.title}>Reading</h3>
          <img className={styles.image} src="/book.jpeg" alt="" />
        </div>
        <div>
          <h3 className={styles.title}>Listening To</h3>
          <img className={styles.image} src="/book.jpeg" alt="" />
        </div>
        <div>
          <h3 className={styles.title}>Building</h3>
          <img className={styles.image} src="/keyboard.png" alt="" />
        </div>
      </div>
    </section>
  );
}
