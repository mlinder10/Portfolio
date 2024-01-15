import { FaEnvelope, FaUser } from "react-icons/fa";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.main} id="contact">
      <div className={styles.left}>
        <h1>Send Me A Message</h1>
        <form className={styles.form} autoComplete="off">
          <div className={styles.email}>
            <FaEnvelope />
            <input type="text" placeholder="Email" autoComplete="off" />
          </div>
          <div className={styles.name}>
            <FaUser />
            <input type="text" placeholder="Name" autoComplete="off" />
          </div>
          <textarea rows={10} placeholder="Message" />
        </form>
      </div>
      <div className={styles.right}>
        <img src="" alt="" />
      </div>
    </section>
  );
}
