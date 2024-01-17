import { useState } from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import styles from "../styles/about.module.css";

type Interests = 0 | 1 | 2;

export default function About() {
  const [show, setShow] = useState<Interests>(0);
  const offset = 250;

  function left() {
    if (show === 0) return setShow(2);
    setShow((show - 1) as Interests);
  }

  function right() {
    if (show === 2) return setShow(0);
    setShow((show + 1) as Interests);
  }

  function computeStyle(interest: Interests) {
    const left = { translate: `-${offset}px`, opacity: "0", scale: "0.6" };
    const target = { translate: "0", opacity: "1", scale: "1" };
    const right = { translate: `${offset}px`, opacity: "0", scale: "0.6" };

    switch (interest) {
      case 0:
        switch (show) {
          case 0:
            return target;
          case 1:
            return left;
          case 2:
            return right;
        }
      case 1:
        switch (show) {
          case 0:
            return right;
          case 1:
            return target;
          case 2:
            return left;
        }
      case 2:
        switch (show) {
          case 0:
            return left;
          case 1:
            return right;
          case 2:
            return target;
        }
    }
  }

  return (
    <section className={styles.main} id="about">
      <div className={styles.left}>
        <h1 className={styles.title}>About Me</h1>
        <p>
          I'm currently a junior at the University of South Carolina, where I
          study computer science and psychology. I love learning about new
          technologies and ideas. As a consequence, I spend the majority of my
          free time reading books, listening to podcasts, and building things.
          Here are some of the places that my interest lies at the moment.
        </p>
      </div>
      <div className={styles.right}>
        <button onClick={left}>
          <VscArrowLeft />
        </button>
        <div className={styles["interest-container"]}>
          <div className={styles.interest} style={computeStyle(0)}>
            <h2>Reading</h2>
            <div className={styles.content}>
              <img className={styles.img} src="/book.jpeg" alt="" />
              <p className={styles.text}>{`Some Text`}</p>
            </div>
          </div>
          <div className={styles.interest} style={computeStyle(1)}>
            <h2>Listening</h2>
            <div className={styles.content}>
              <img className={styles.img} src="/podcast.png" alt="" />
              <p className={styles.text}>{`Some Text`}</p>
            </div>
          </div>
          <div className={styles.interest} style={computeStyle(2)}>
            <h2>Building</h2>
            <div className={styles.content}>
              <img className={styles.img} src="/keyboard.png" alt="" />
              <p className={styles.text}>{`Some Text`}</p>
            </div>
          </div>
        </div>
        <button onClick={right}>
          <VscArrowRight />
        </button>
      </div>
    </section>
  );
}
