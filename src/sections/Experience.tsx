import styles from "./experience.module.css";
import {
  SiCplusplus,
  SiCss3,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiSwift,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaNode } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";
import ExperienceItem, { experience } from "../components/ExperienceItem";
import ProjectItem, { projects } from "../components/ProjectItem";

export default function Experience() {
  const [current, setCurrent] = useState<Skill[]>(experience[0].skills);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    const intersectionRatios = new Map<Element, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectionRatios.set(entry.target, entry.intersectionRatio);
          } else {
            intersectionRatios.delete(entry.target);
          }
        });
        let maxRatio = 0;
        let mostVisibleElement: Element | null = null;

        intersectionRatios.forEach((ratio, element) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleElement = element;
          }
        });

        if (mostVisibleElement) {
          (mostVisibleElement as HTMLElement).classList.forEach((c) => {
            if (c.startsWith("skills--")) {
              setCurrent(JSON.parse(c.split("--")[1]));
            }
          });
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const observeElement = useCallback(
    (element: HTMLElement | null, skills: Skill[]) => {
      if (element && observerRef.current) {
        element.classList.add("skills--" + JSON.stringify(skills));
        observerRef.current?.observe(element);
      }
    },
    []
  );

  return (
    <section className={styles.section}>
      <div className={styles["experience-container"]}>
        <h2 id="experience">Professional Experience</h2>
        <div>
          {experience.map((item) => (
            <ExperienceItem
              key={item.title}
              {...item}
              observeElement={observeElement}
            />
          ))}
        </div>
        <h2 id="projects">Personal Projects</h2>
        <div>
          {projects.map((item, i) => (
            <ProjectItem
              key={item.title}
              {...item}
              observeElement={observeElement}
              flipped={i % 2 === 1}
            />
          ))}
        </div>
      </div>
      <div className={styles["skills-container"]}>
        <h2>Skills</h2>
        <Skills highlighted={current} />
      </div>
    </section>
  );
}

export type Skill =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Swift"
  | "SwiftUI"
  | "React Native"
  | "Go"
  | "Node"
  | "Python"
  | "Java"
  | "C++"
  | "PostgreSQL"
  | "MySQL"
  | "SQLite"
  | "MongoDB";

type SkillsProps = {
  highlighted: Skill[];
};

function Skills({ highlighted }: SkillsProps) {
  return (
    <ul>
      <li>
        <h4>Web</h4>
      </li>
      <li className={highlighted.includes("HTML") ? styles.highlighted : ""}>
        <SiHtml5 />
        <span>HTML</span>
      </li>
      <li className={highlighted.includes("CSS") ? styles.highlighted : ""}>
        <SiCss3 />
        <span>CSS</span>
      </li>
      <li
        className={highlighted.includes("JavaScript") ? styles.highlighted : ""}
      >
        <SiJavascript />
        <span>JavaScript</span>
      </li>
      <li
        className={highlighted.includes("TypeScript") ? styles.highlighted : ""}
      >
        <SiTypescript />
        <span>TypeScript</span>
      </li>
      <li className={highlighted.includes("React") ? styles.highlighted : ""}>
        <SiReact />
        <span>React</span>
      </li>
      <li>
        <h4>Mobile</h4>
      </li>
      <li className={highlighted.includes("Swift") ? styles.highlighted : ""}>
        <SiSwift />
        <span>Swift</span>
      </li>
      <li className={highlighted.includes("SwiftUI") ? styles.highlighted : ""}>
        <SiSwift />
        <span>SwiftUI</span>
      </li>
      <li
        className={
          highlighted.includes("React Native") ? styles.highlighted : ""
        }
      >
        <SiReact />
        <span>React Native</span>
      </li>
      <li>
        <h4>Backend</h4>
      </li>
      <li className={highlighted.includes("Node") ? styles.highlighted : ""}>
        <FaNode />
        <span>Node</span>
      </li>
      <li className={highlighted.includes("Python") ? styles.highlighted : ""}>
        <SiPython />
        <span>Python</span>
      </li>
      <li className={highlighted.includes("Java") ? styles.highlighted : ""}>
        <FaJava />
        <span>Java</span>
      </li>
      <li className={highlighted.includes("C++") ? styles.highlighted : ""}>
        <SiCplusplus />
        <span>C++</span>
      </li>
      <li className={highlighted.includes("Go") ? styles.highlighted : ""}>
        <SiGo />
        <span>Go</span>
      </li>
      <li>
        <h4>Database</h4>
      </li>
      <li
        className={highlighted.includes("PostgreSQL") ? styles.highlighted : ""}
      >
        <SiPostgresql />
        <span>PostgreSQL</span>
      </li>
      <li className={highlighted.includes("MySQL") ? styles.highlighted : ""}>
        <SiMysql />
        <span>MySQL</span>
      </li>
      <li className={highlighted.includes("SQLite") ? styles.highlighted : ""}>
        <SiSqlite />
        <span>SQLite</span>
      </li>
      <li className={highlighted.includes("MongoDB") ? styles.highlighted : ""}>
        <SiMongodb />
        <span>MongoDB</span>
      </li>
    </ul>
  );
}
