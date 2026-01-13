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

// Componente do ícone n8n
const SiN8n = ({ size = "1em", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor" // Isso permite que o ícone herde a cor do texto/parent
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.371 3.543c-.457 0-.857.228-1.086.629-.228.343-.228.857.057 1.257l8.286 13.886c.228.4.686.628 1.143.628.457 0 .857-.228 1.086-.628l2.228-3.715c.115-.2.115-.457 0-.657l-4.571-7.714c-.229-.4-.686-.629-1.143-.629-.457 0-.857.229-1.086.629l-3.828 6.4h2.285l2.686-4.514 3.486 5.885-1.143 1.943L2.572 5.829h18.228l-5.6 9.371c-.114.2-.114.457 0 .657l2.286 3.829c.228.4.686.628 1.143.628.457 0 .857-.228 1.086-.628l4.228-7.086c.286-.4.286-.914.058-1.257-.229-.4-.629-.629-1.086-.629H1.371z" />
  </svg>
);

export const techList = [
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
  { name: "n8n", icon: <SiN8n aria-label="n8n" /> },
];
