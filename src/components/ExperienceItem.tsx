import styles from "./experienceitem.module.css";
import { useRef, useEffect } from "react";
import { Skill } from "../sections/Experience";

export const experience: ExperienceType[] = [
  {
    title: "Software Developer",
    company: "Swampfox Technologies",
    start: "May 2022",
    end: "Present",
    location: "Columbia, SC",
    bullets: [
      "Created a command line tool to convert Avaya Orchestration Designer projects into an internal format which primarily consisted of translating Java to JEXL and SCXML to JSON",
      "Built a full stack web application using Java Spring Boot, React.js, and PostgreSQL to process SIP messages and present them as sequence diagrams to frontend users",
      "Merged several features to existing React.js and Java Spring Boot applications in production environments",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Java",
      "PostgreSQL",
    ],
  },
  {
    title: "SaaS Developer",
    company: "University of South Carolina",
    start: "Mar 2022",
    end: "May 2022",
    location: "Columbia, SC",
    bullets: [
      "Designed and implemented numerous personal websites for students",
      "Developed embedded web applications for the Monday.com platform in collaboration with student entrepreneurs mainly using React.js, Golang, and SQLite accruing over 200 active monthly users",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "Go",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    start: "Jan 2021",
    end: "Mar 2022",
    location: "Columbia, SC",
    bullets: [
      "Developed a web application for the Village of Fredonia to simplify the community's public pavilion reservation process using Next.js and PostgreSQL",
      "Created websites for multiple small businesses mostly using Next.js",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "PostgreSQL",
    ],
  },
];

type ExperienceType = {
  title: string;
  company: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
  skills: Skill[];
};

type ExperienceItemProps = ExperienceType & {
  observeElement: (element: HTMLElement | null, skills: Skill[]) => void;
};

export default function ExperienceItem({
  title,
  company,
  start,
  end,
  location,
  bullets,
  skills,
  observeElement,
}: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observeElement(ref.current, skills);
  }, [observeElement, skills]);

  return (
    <div className={styles.experience} ref={ref}>
      <div className={styles.dates}>
        <span>{start}</span>
        <span className={styles.separator} />
        <span>{location}</span>
        <span className={styles.separator} />
        <span>{end}</span>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <span className={styles.company}>|</span>
        <span className={styles.company}>{company}</span>
      </div>
      <ul className={styles.bullets}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
