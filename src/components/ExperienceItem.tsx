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
      "Built a full-stack web application with Java Spring Boot, React.js, and PostgreSQL to process SIP messages and render them as sequence diagrams for frontend users.",
      "Integrated new features into existing React.js and Java Spring Boot applications in live production environments.",
      "Developed a command-line tool to convert Avaya Orchestration Designer projects into an internal format, primarily translating Java to JEXL and SCXML to JSON.",
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
      "Collaborated with student entrepreneurs to create embedded web applications for the Monday.com platform, utilizing React.js, Golang, and SQLite, accruing over 1000 active monthly users.",
      "Designed and developed personalized websites for students, enhancing their online presence and project portfolios.",
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
      "Developed a web application for the Village of Fredonia, NY, streamlining the community's public pavilion reservation process using Next.js and PostgreSQL.",
      "Built custom websites for small businesses and individuals, primarily employing Next.js.",
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
