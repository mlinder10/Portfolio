import styles from "../styles/projects.module.css";
import Reveal from "../components/Reveal";
import wcjMobile from "../assets/projects/wordCatchingJournalMobile.png";
import wcjWeb from "../assets/projects/wordCatchingJournal.png";
import tsLogin from "../assets/projects/taskShareLogin.png";
import tsDash from "../assets/projects/taskShareDashboard.png";
import vvMobile from "../assets/projects/valetVenturesMobile.png";
import vvWeb from "../assets/projects/valetVenturesHome.png";

export default function Projects() {
  return (
    <section className={styles.main} id="projects">
      <h1 className={styles.title}>My Projects</h1>

      <div className={`${styles.project}`}>
        <div className={styles.imgs}>
          <Reveal from="bottom">
            <img className={styles["img-left"]} src={wcjMobile} alt="" />
          </Reveal>
          <Reveal from="right">
            <img className={styles["img-right"]} src={wcjWeb} alt="" />
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
                href="https://github.com/mlinder10/WordCatchingJournal"
                target="_blank"
              >
                Source (web)
              </a>
              <a
                className={styles.link}
                href="https://github.com/mlinder10/WordCatchingJournalSwift"
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
                href="https://github.com/mlinder10/TaskShare"
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
            <img className={styles["img-left"]} src={tsLogin} alt="" />
          </Reveal>
          <Reveal from="right">
            <img className={styles["img-right"]} src={tsDash} alt="" />
          </Reveal>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.imgs}>
          <Reveal from="bottom">
            <img className={styles["img-left"]} src={vvMobile} alt="" />
          </Reveal>
          <Reveal from="right">
            <img className={styles["img-right"]} src={vvWeb} alt="" />
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
              I was contracted by Valet Ventures, a small business based in
              Columbia, SC, to create a landing page for their company. The site
              was built with Next.js: supporting simple page routing, lazy image
              loading, and serverless functions. These functions were leveraged
              to send emails directly to the business owner from the site's
              embedded contact form with the help of Nodemailer.
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
