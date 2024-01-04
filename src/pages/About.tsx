import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section className={styles.main} id="about">
      <div className={styles.top}>
        <div>
          <h3 className={styles.title}>Reading</h3>
          <img className={styles.image} src="/book.jpeg" alt="" />
        </div>
        <div>
          <h3 className={styles.title}>Building</h3>
          <img className={styles.image} src="/keyboard.png" alt="" />
        </div>
        <div>
          <h3 className={styles.title}>Learning</h3>
          <img className={styles.image} src="/book.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
}
