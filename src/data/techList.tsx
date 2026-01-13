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

type TechItem = {
  name: TTechs;
  icon: JSX.Element;
};

//Componente do ícone n8n
const N8nIcon = ({
  size = 29,
  filterWhite = false,
  filterPurple = false,
}: {
  size?: number;
  filterWhite?: boolean;
  filterPurple?: boolean;
}) => {
  let filter =
    "invert(54%) sepia(88%) saturate(3750%) hue-rotate(346deg) brightness(101%) contrast(101%)";

  if (filterWhite) {
    filter = "invert(100%) brightness(200%) contrast(100%)";
  } else if (filterPurple) {
    // Aproximação fiel do #7f00ff
    filter =
      "invert(17%) sepia(96%) saturate(7476%) hue-rotate(268deg) brightness(96%) contrast(108%)";
  }

  return (
    <img
      src="https://logo.svgcdn.com/simple-icons/n8n-dark.svg"
      alt="n8n"
      width={size}
      height={size}
      style={{
        objectFit: "contain",
        display: "block",
        filter,
      }}
    />
  );
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
  { name: "Git", icon: <SiGit aria-label="Git" /> },
  { name: "GitHub", icon: <SiGithub aria-label="GitHub" /> },
  { name: "Docker", icon: <SiDocker aria-label="Docker" /> },
  { name: "n8n", icon: <N8nIcon /> },
];
