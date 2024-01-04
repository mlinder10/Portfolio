import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <section className={styles.main} id="projects">
      <h1>Projects</h1>
      <article className={styles.project}>
        <h2>Word Catching Journal</h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="" alt="" className={styles.img} />
          </div>
          <div className={styles.right}>
            <h3>Technologies Used</h3>
            <ul className={styles.technologies}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>SwiftUI</li>
              <li>SQLite</li>
            </ul>
            <p>What I learned</p>
          </div>
        </div>
      </article>

      <article className={styles.project}>
        <h2>Task Share</h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/projects/taskShareDashboard.png" alt="" className={styles.img} />
          </div>
          <div className={styles.right}>
            <h3>Technologies Used</h3>
            <ul className={styles.technologies}>
              <li>Java</li>
              <li>JavaFX</li>
              <li>Scene Builder</li>
              <li>Git</li>
              <li>JSON</li>
            </ul>
            <p>What I learned</p>
          </div>
        </div>
      </article>

      <article className={styles.project}>
        <h2>Valet Ventures</h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <img src="/projects/valetVenturesHome.png" alt="" className={styles.img} />
          </div>
          <div className={styles.right}>
            <h3>Technologies Used</h3>
            <ul className={styles.technologies}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Nodemailer</li>
            </ul>
            <p>What I learned</p>
          </div>
        </div>
      </article>
    </section>
  );
}
