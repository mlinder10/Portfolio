import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section className={styles.main} id="about">
      <div className={styles.top}>
        <h1 className={styles.title}>About Me</h1>
        <p>
          I'm currently a junior at the University of South Carolina, where I
          study computer science and psychology. I love learning about new
          technologies and ideas. As a consequence, I spend the majority of
          my free time reading books, listening to podcasts, and building things.
          Here are some of the places that my interest lies at the moment.
        </p>
      </div>
      <div className={styles.columns}>
        <div>
          <h3 className={styles.heading}>Reading</h3>
          <img className={styles.image} src="/book.jpeg" alt="" />
        </div>
        <div>
          <h3 className={styles.heading}>Listening To</h3>
          <img className={styles.image} src="/book.jpeg" alt="" />
        </div>
        <div>
          <h3 className={styles.heading}>Building</h3>
          <img className={styles.image} src="/keyboard.png" alt="" />
        </div>
      </div>
    </section>
  );
}
