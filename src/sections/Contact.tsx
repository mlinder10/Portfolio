import { useEffect, useState } from "react";
import styles from "./contact.module.css";
import FloatingInput from "../components/FloatingInput";
import FloatingTextarea from "../components/FloatingTextarea";
import { FaEnvelope, FaFile, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

type SendStatus = "Send" | "Sending" | "Sent" | "Error";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sendStatus, setSendStatus] = useState<SendStatus>("Send");

  async function handleSend() {
    if (!name || !email || !message) return;
    setSendStatus("Sending");
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
      setSendStatus("Sent");
    } catch (err: any) {
      setSendStatus("Error");
      console.log(err?.message);
    }
  }

  useEffect(() => {
    if (sendStatus !== "Send" && sendStatus !== "Sending") {
      setTimeout(setSendStatus.bind(null, "Send"), 3000);
    }
  }, [sendStatus]);

  return (
    <section className={styles.section} id="contact">
      <h2>Contact</h2>
      <div className={styles.container}>
        <div className={styles.form}>
          <FloatingInput
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FloatingInput
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FloatingTextarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
          />
          <button
            disabled={sendStatus !== "Send"}
            className={styles.send}
            onClick={handleSend}
          >
            <span>{sendStatus}</span>
          </button>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href="/resume.pdf" target="_blank">
                <FaFile />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/mlinder10" target="_blank">
                <FaGithub />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/matt-linder10"
                target="_blank"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:mclinder@email.sc.edu">
                <FaEnvelope />
                <span>mclinder@email.sc.edu</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
