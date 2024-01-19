import Reveal from "../components/Reveal";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <section className={styles.main} id="projects">
      <h1 className={styles.title}>My Projects</h1>
      <Reveal from="left" duration={0.8}>
        <article className={styles.project}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2>Word Catching Journal</h2>
              <img
                src="/projects/wordCatchingJournal.png"
                alt=""
                className={styles.img}
              />
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
                {`
                  Using Next.js and SwiftUI, I created a small social media app with 
                  web and iOS interfaces. The goal of the app is to help users 
                  bolster their vocabulary by providing a centralized location to learn, 
                  log, and share unfamiliar words.
                `}
              </p>
              <div className={styles.links}>
                <a
                  className={styles.link}
                  href="https://word-catching-journal.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Site
                </a>
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
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal from="right" duration={0.8}>
        <article className={`${styles.project} ${styles["project-two"]}`}>
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
                {`
                  Over the course of two fourteen-day sprints, my teammates and I
                  developed a Scrum task manager desktop application. We employed
                  the JavaFX framework along with the MVC architectural pattern to
                  create a GUI and wrote the backend entirely in Java, using JSON
                  files to store data.
                `}
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
      </Reveal>

      <Reveal from="left" duration={0.8}>
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
                {`
                  I was contracted by Valet Ventures--a small business based in
                  Columbia, SC--to create a landing page for their company.
                `}
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
      </Reveal>
    </section>
  );
}
