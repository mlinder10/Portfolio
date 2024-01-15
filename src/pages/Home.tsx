import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <section className={styles.main} id="home">
      <img
        src="https://images.ctfassets.net/ffdmbwkg5tsk/cftI1Mq0WcEly4qgRIlao/7a396331c26d8e78b33b1f496fcf6e7e/photo-1542435503-956c469947f6?w=1920&q=100&fm=png&bg=rgb%3A000000"
        alt=""
        className={styles.img}
      />
      <div className={styles["content-container"]}>
        <p className={styles.title}>{"Hi, I'm Matt"}</p>
        <p className={styles.subtitle}>Software Engineer</p>
        <div className={styles.links}>
          <a href="#contact" className={styles.contact}>
            Contact Me
          </a>
          <a href="#projects" className={styles.projects}>
            View Projects
          </a>
        </div>
      </div>
      <div className={styles.right}></div>
    </section>
  );
}
