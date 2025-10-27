import "./technologies.css";
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
} from "react-icons/si";

const techList = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

export const Technologies = () => {
  return (
    <section className="container-technologies">
      <h4>
        <span className="key">&#123; </span>Tecnologias
        <span className="key"> &#125;</span>
      </h4>
      <ul className="list-tech">
        {techList.map((tech) => (
          <li key={tech.name}>
            <div className="tech-icon">{tech.icon}</div>
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
