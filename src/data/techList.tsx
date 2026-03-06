import { JSX } from "react";
import { TTechs } from "./projectsData";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiPrisma,
  SiDocker,
} from "react-icons/si";
import { N8nIcon } from "./N8nIcon";

type TechItem = {
  name: TTechs;
  icon: JSX.Element;
};

export const techList: TechItem[] = [
  { name: "HTML", icon: <SiHtml5 aria-label="HTML" /> },
  { name: "CSS", icon: <SiCss3 aria-label="CSS" /> },
  { name: "JavaScript", icon: <SiJavascript aria-label="JavaScript" /> },
  { name: "TypeScript", icon: <SiTypescript aria-label="TypeScript" /> },
  { name: "Node.js", icon: <SiNodedotjs aria-label="Node" /> },
  { name: "React", icon: <SiReact aria-label="React" /> },
  { name: "Next.js", icon: <SiNextdotjs aria-label="Next.js" /> },
  { name: "Tailwind", icon: <SiTailwindcss aria-label="Tailwind" /> },
  { name: "MySQL", icon: <SiMysql aria-label="MySQL" /> },
  { name: "PostgreSQL", icon: <SiPostgresql aria-label="PostgreSQL" /> },
  { name: "MongoDB", icon: <SiMongodb aria-label="MongoDB" /> },
  { name: "Prisma ORM", icon: <SiPrisma aria-label="Prisma ORM" /> },
  { name: "React Native", icon: <SiReact aria-label="React Native" /> },
  { name: "Git", icon: <SiGit aria-label="Git" /> },
  { name: "GitHub", icon: <SiGithub aria-label="GitHub" /> },
  { name: "Docker", icon: <SiDocker aria-label="Docker" /> },
  { name: "n8n", icon: <N8nIcon /> },

];
