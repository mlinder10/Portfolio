import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <section className={styles.main} id="projects">
      <h1>Projects</h1>
      <article className={styles.project}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Word Catching Journal</h2>
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
            <h4>Dictionary Social Media App</h4>
            <p>
              Using Next.js and SwiftUI, I created a small social media app to
              learn, log, and share unfamiliar words in the hope to help users
              expand their vocabulary.
            </p>
            <div className={styles.links}>
              <a
                className={styles.link}
                href="https://github.com/mlinder10/WordCatchingJournal"
                target="_blank"
                rel="noreferrer"
              >
                Source Code (web)
              </a>
              <a
                className={styles.link}
                href="https://github.com/mlinder10/WordCatchingJournalSwift"
                target="_blank"
                rel="noreferrer"
              >
                Source Code (iOS)
              </a>
              <a
                className={styles.link}
                href="https://word-catching-journal.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className={styles.project}>
        <div className={styles.content}>
          <div className={styles.right}>
            <h3>Technologies Used</h3>
            <ul className={styles.technologies}>
              <li>Java</li>
              <li>JavaFX</li>
              <li>Scene Builder</li>
              <li>Git</li>
              <li>JSON</li>
            </ul>
            <h4>
              Semester-long group project for CSCE 247 (Software Engineering)
            </h4>
            <p>
              Given two fourteen-day sprints, I, along with my four group mates
              created a task manager application similar to Github Projects.
            </p>
            <a
              className={styles.link}
              href="https://github.com/mlinder10/ProjectManagerGUI"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className={styles.left}>
            <h2>Task Share</h2>
            <img
              src="/projects/taskShareDashboard.png"
              alt=""
              className={styles.img}
            />
          </div>
        </div>
      </article>

      <article className={styles.project}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Valet Ventures</h2>
            <img
              src="/projects/valetVenturesHome.png"
              alt=""
              className={styles.img}
            />
          </div>
          <div className={styles.right}>
            <h3>Technologies Used</h3>
            <ul className={styles.technologies}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Nodemailer</li>
            </ul>
            <h4>Company page for Valet Ventures</h4>
            <p>
              I was contracted by Valet Ventures--a small business based in
              Columbia, SC--to create a landing page for their company.
            </p>
            <a
              className={styles.link}
              href="https://valetventures.co"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
