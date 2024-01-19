import styles from "../styles/projects.module.css";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section className={styles.main} id="projects">
      <h1 className={styles.title}>My Projects</h1>

      <div className={`${styles.project}`}>
        <div className={styles.imgs}>
          <Reveal from="bottom">
            <img
              className={styles["img-left"]}
              src="/projects/wordCatchingJournalMobile.png"
              alt=""
            />
          </Reveal>
          <Reveal from="right">
            <img
              className={styles["img-right"]}
              src="/projects/wordCatchingJournal.png"
              alt=""
            />
          </Reveal>
        </div>
        <Reveal from="bottom">
          <div className={styles["text-container"]}>
            <h2>Word Catching Journal</h2>
            <ul className={styles.technologies}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>SwiftUI</li>
              <li>SQLite</li>
            </ul>
            <h3>Dictionary Social Media App</h3>
            <p className={styles.text}>
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
              >
                Live Site
              </a>
              <a
                className={styles.link}
                href="https://github.com/mattlinder/word-catching-journal"
                target="_blank"
              >
                Source (web)
              </a>
              <a
                className={styles.link}
                href="https://github.com/mattlinder/word-catching-journal"
                target="_blank"
              >
                Source (iOS)
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className={`${styles.project} ${styles["project-backwards"]}`}>
        <Reveal from="bottom">
          <div className={styles["text-container"]}>
            <h2>Task Share</h2>
            <ul className={styles.technologies}>
              <li>Java</li>
              <li>JavaFX</li>
              <li>Scene Builder</li>
              <li>Git</li>
              <li>JSON</li>
            </ul>
            <h3>Group Project for CSCE 247</h3>
            <p className={styles.text}>
              {`
              Over the course of two fourteen-day sprints, my teammates and I
              developed a Scrum task manager desktop application. We employed
              the JavaFX framework along with the MVC architectural pattern to
              create a GUI and wrote the backend entirely in Java, using JSON
              files to store data.
            `}
            </p>
            <div className={styles.links}>
              <a
                className={styles.link}
                href="https://github.com/mattlinder/TaskShare"
                target="_blank"
              >
                View Code
              </a>
            </div>
          </div>
        </Reveal>
        <div className={styles.imgs}>
          <Reveal
            from="bottom"
            style={{
              "align-self": "flex-end",
              "justify-self": "flex-end",
              width: "80%",
            }}
          >
            <img
              className={styles["img-left"]}
              src="/projects/taskShareDashboard.png"
              alt=""
            />
          </Reveal>
          <Reveal from="right">
            <img
              className={styles["img-right"]}
              src="/projects/taskShareTask.png"
              alt=""
            />
          </Reveal>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.imgs}>
          <Reveal from="bottom">
            <img
              className={styles["img-left"]}
              src="/projects/valetVenturesMobile.png"
              alt=""
            />
          </Reveal>
          <Reveal from="right">
            <img
              className={styles["img-right"]}
              src="/projects/valetVenturesHome.png"
              alt=""
            />
          </Reveal>
        </div>
        <Reveal from="bottom">
          <div className={styles["text-container"]}>
            <h2>Valet Ventures</h2>
            <ul className={styles.technologies}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Nodemailer</li>
            </ul>
            <h3>Company page for Valet Ventures</h3>
            <p className={styles.text}>
              {`
                I was contracted by Valet Ventures--a small business based in
                Columbia, SC--to create a landing page for their company.
              `}
            </p>
            <a
              className={styles.link}
              href="https://valetventures.co"
              target="_blank"
            >
              View Site
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
