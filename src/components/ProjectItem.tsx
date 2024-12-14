import styles from "./projectitem.module.css";
import { useRef, useEffect, ReactNode } from "react";
import { Skill } from "../sections/Experience";
import { FaGithub, FaPlay } from "react-icons/fa";

export const projects: ProjectType[] = [
  {
    title: "Word Catching Journal",
    description:
      "Social media platform designed to help users expand their vocabularies together",
    skills: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Node",
      "Swift",
      "SwiftUI",
      "SQLite",
    ],
    videoUrl: "https://youtube.com/embed/HaPrNBwLzbo",
    videoType: "landscape",
    links: [
      {
        text: "Live Site",
        icon: <FaPlay />,
        url: "https://word-catching-journal.vercel.app",
      },
      {
        text: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/mlinder10/WordCatchingJournal",
      },
    ],
  },
  {
    title: "Vincera",
    description:
      "iOS app aimed at helping those new to lifting weights design a plan and track their progress",
    skills: ["Swift", "SwiftUI"],
    videoUrl: "https://www.youtube.com/embed/N6N2-CGOQ8U",
    videoType: "portrait",
    links: [
      {
        text: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/mlinder10/Vincera",
      },
    ],
  },
];

type VideoType = "landscape" | "portrait";

type ProjectType = {
  title: string;
  description: string;
  skills: Skill[];
  videoUrl: string;
  videoType: VideoType;
  links: {
    icon?: ReactNode;
    text: string;
    url: string;
  }[];
};

type ProjectItemProps = ProjectType & {
  observeElement: (element: HTMLElement | null, skills: Skill[]) => void;
  flipped?: boolean;
};

export default function ProjectItem({
  title,
  description,
  skills,
  videoUrl,
  videoType,
  links,
  observeElement,
  flipped,
}: ProjectItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    observeElement(ref.current, skills);
  }, [observeElement, skills]);

  if (flipped) {
    return (
      <div className={styles.project} ref={ref}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {link.icon}
                <span>{link.text}</span>
              </a>
            ))}
          </div>
        </div>
        <iframe
          src={videoUrl}
          allowFullScreen
          title={`${title} video`}
          allow="encrypted-media"
          aria-label={`${title} video`}
          className={`${styles.video} ${styles[videoType]}`}
          onError={() => console.log("Failed to load video")}
        />
      </div>
    );
  }

  return (
    <div className={styles.project} ref={ref}>
      <iframe
        src={videoUrl}
        allowFullScreen
        title="video"
        allow="encrypted-media"
        className={`${styles.video} ${styles[videoType]}`}
      />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank">
              {link.icon}
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
