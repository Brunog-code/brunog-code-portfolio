import "./technologies.css";
import { techList } from "../../data/techList";

export const Technologies = () => {
  return (
    <section className="container-technologies" data-scroll-section>
      <div className="title">
        <h1>
          <span className="key-title">&#123; </span>Tecnologias
          <span className="key-title"> &#125;</span>
        </h1>
      </div>
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
