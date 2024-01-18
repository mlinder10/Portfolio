import { FaEnvelope, FaUser } from "react-icons/fa";
import styles from "../styles/contact.module.css";
import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "../components/Reveal";

type Status = "Send" | "Sending..." | "Email sent!" | "Error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMsg, setStatusMsg] = useState<Status>("Send");

  async function handleSend(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatusMsg("Sending...");
    const templateVals = { name, email, message };
    setName("");
    setEmail("");
    setMessage("");
    try {
      await emailjs.send(
        "service_e6jvzcu",
        "template_soeiwjl",
        templateVals,
        "0GjINiaEuMIa7iOfQ"
      );
      setStatusMsg("Email sent!");
    } catch (err: any) {
      setStatusMsg("Error");
      console.log(err?.message);
    }
  }

  useEffect(() => {
    if (statusMsg === "Send" || statusMsg === "Sending...") return;
    setTimeout(() => {
      setStatusMsg("Send");
    }, 2000);
  }, [statusMsg]);

  return (
    <section className={styles.main} id="contact">
      <div className={styles.left}>
        <h1 className={styles.title}>Send Me A Message</h1>
        <Reveal width="100%" from="left" duration={0.7} delay={0.3}>
          <form className={styles.form}>
            <div className={styles.email}>
              <FaEnvelope />
              <input
                type="text"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.name}>
              <FaUser />
              <input
                type="text"
                placeholder="Name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className={styles.btn}
              onClick={handleSend}
              disabled={statusMsg === "Sending..."}
            >
              {statusMsg}
            </button>
          </form>
        </Reveal>
      </div>
      <div className={styles.right}>
        {/* <a href="https://www.linkedin.com/in/matt-linder10" target="_blank">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://github.com/mlinder10" target="_blank">
          <FaGithub className={styles.icon} />
        </a> */}
      </div>
    </section>
  );
}
