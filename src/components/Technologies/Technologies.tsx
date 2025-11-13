import "./technologies.css";
import { techList } from "../../data/techList";
import { FadeIn } from "../lib/Gsap/FadeIn";
import { useRef } from "react";

export const Technologies = () => {
  const techRef = useRef<HTMLDivElement>(null);
  const techRefTitle = useRef<HTMLDivElement>(null);

  return (
    <section className="container-technologies" data-scroll-section>
      <div className="title">
        <FadeIn ref={techRefTitle} x={200} duration={0.7}>
          <h1>
            <span className="key-title">&#123;</span>Tecnologias
            <span className="key-title">&#125;</span>
          </h1>
        </FadeIn>
      </div>
      <FadeIn ref={techRef} x={-150}>
        <ul className="list-tech">
          {techList.map((tech) => (
            <li key={tech.name}>
              <div className="tech-icon">{tech.icon}</div>
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
};
